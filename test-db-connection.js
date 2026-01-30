/**
 * Database Connection Test Script
 * This script tests the database connection and verifies the schema
 */

const mysql = require('mysql');
require('dotenv').config({ path: '.env' });

async function testConnection() {
  console.log('🔍 Testing Database Connection...\n');
  
  const config = {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT) || 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DB_NAME,
  };

  console.log('📋 Configuration:');
  console.log(`   Host: ${config.host}`);
  console.log(`   Port: ${config.port}`);
  console.log(`   User: ${config.user}`);
  console.log(`   Database: ${config.database}`);
  console.log(`   Password: ${config.password ? '***' : '(empty)'}\n`);

  let connection;
  
  try {
    // Test connection
    console.log('🔌 Attempting to connect...');
    connection = mysql.createConnection(config);
    
    // Wrap in promise for async/await
    await new Promise((resolve, reject) => {
      connection.connect((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
    console.log('✅ Connection successful!\n');

    // Test database exists
    console.log('📊 Checking database tables...');
    const tables = await new Promise((resolve, reject) => {
      connection.query(`
        SELECT TABLE_NAME 
        FROM information_schema.TABLES 
        WHERE TABLE_SCHEMA = ?
        ORDER BY TABLE_NAME
      `, [config.database], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
    
    console.log(`   Found ${tables.length} tables\n`);

    // Check key tables
    const keyTables = [
      'study_industries',
      'study_sub_industries', 
      'study_areas',
      'countries',
      'users',
      'students',
      'universities',
      'course_lists'
    ];

    console.log('🔑 Checking key tables:');
    const tableNames = tables.map(t => t.TABLE_NAME);
    keyTables.forEach(table => {
      const exists = tableNames.includes(table);
      console.log(`   ${exists ? '✅' : '❌'} ${table}`);
    });

    // Check study_industries structure
    console.log('\n📋 Checking study_industries table structure:');
    const industryColumns = await new Promise((resolve, reject) => {
      connection.query(`
        SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT
        FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'study_industries'
        ORDER BY ORDINAL_POSITION
      `, [config.database], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
    
    if (industryColumns.length > 0) {
      industryColumns.forEach(col => {
        console.log(`   - ${col.COLUMN_NAME} (${col.DATA_TYPE}) ${col.IS_NULLABLE === 'YES' ? 'NULL' : 'NOT NULL'}`);
      });
    } else {
      console.log('   ⚠️  Table not found - migrations may not have been run');
    }

    // Check study_areas structure
    console.log('\n📋 Checking study_areas table structure:');
    const areaColumns = await new Promise((resolve, reject) => {
      connection.query(`
        SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT
        FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'study_areas'
        ORDER BY ORDINAL_POSITION
      `, [config.database], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
    
    if (areaColumns.length > 0) {
      areaColumns.forEach(col => {
        console.log(`   - ${col.COLUMN_NAME} (${col.DATA_TYPE}) ${col.IS_NULLABLE === 'YES' ? 'NULL' : 'NOT NULL'}`);
      });
    } else {
      console.log('   ⚠️  Table not found - migrations may not have been run');
    }

    // Test sample query
    console.log('\n🧪 Testing sample queries:');
    
    if (tableNames.includes('study_industries')) {
      const industries = await new Promise((resolve, reject) => {
        connection.query(`
          SELECT COUNT(*) as count FROM study_industries WHERE deleted_at IS NULL
        `, (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      });
      console.log(`   ✅ study_industries: ${industries[0].count} active records`);
    }

    if (tableNames.includes('study_areas')) {
      const areas = await new Promise((resolve, reject) => {
        connection.query(`
          SELECT COUNT(*) as count FROM study_areas WHERE deleted_at IS NULL
        `, (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      });
      console.log(`   ✅ study_areas: ${areas[0].count} active records`);
    }

    if (tableNames.includes('countries')) {
      const countries = await new Promise((resolve, reject) => {
        connection.query(`
          SELECT COUNT(*) as count FROM countries WHERE deleted_at IS NULL
        `, (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      });
      console.log(`   ✅ countries: ${countries[0].count} active records`);
    }

    console.log('\n✅ Database connection test completed successfully!');
    
  } catch (error) {
    console.error('\n❌ Database connection failed!');
    console.error(`   Error: ${error.message}`);
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('\n   💡 Check your MYSQL_USER and MYSQL_PASSWORD in .env file');
    } else if (error.code === 'ECONNREFUSED') {
      console.error('\n   💡 Check if MySQL server is running and MYSQL_HOST/MYSQL_PORT are correct');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('\n   💡 Database does not exist. Create it or check MYSQL_DB_NAME in .env');
    }
    
    process.exit(1);
  } finally {
    if (connection) {
      connection.end();
      console.log('\n🔌 Connection closed');
    }
  }
}

testConnection();
