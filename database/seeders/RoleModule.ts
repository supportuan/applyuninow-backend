import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RoleModule from 'App/Models/RoleModule'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await RoleModule.createMany([
      {
        "id" : 1,
        "name" : "Marketing Tool",
        "slug" : "marketing_tool",
        "parent_id" : null,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 2,
        "name" : "Leads",
        "slug" : "leads",
        "parent_id" : null,
        "created_at" : "2023-02-01 01:07:42",
        "updated_at" : "2023-02-01 01:07:42"
      },
      {
        "id" : 3,
        "name" : "Explore",
        "slug" : "explore",
        "parent_id" : 2,
        "created_at" : "2023-02-01 01:07:42",
        "updated_at" : "2023-02-01 01:07:42"
      },
      {
        "id" : 4,
        "name" : "Add on",
        "slug" : "add_on",
        "parent_id" : 2,
        "created_at" : "2023-02-01 01:07:42",
        "updated_at" : "2023-02-01 01:07:42"
      },
      {
        "id" : 5,
        "name" : "Applications",
        "slug" : "students",
        "parent_id" : null,
        "created_at" : "2023-02-01 01:07:42",
        "updated_at" : "2023-02-01 01:07:42"
      },
      {
        "id" : 6,
        "name" : "Staff",
        "slug" : "users",
        "parent_id" : null,
        "created_at" : "2023-02-01 01:07:42",
        "updated_at" : "2023-02-01 01:07:42"
      },
      {
        "id" : 7,
        "name" : "Internal Staff",
        "slug" : "internal",
        "parent_id" : 6,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 8,
        "name" : "External Staff",
        "slug" : "external",
        "parent_id" : 6,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 9,
        "name" : "Settings",
        "slug" : "settings",
        "parent_id" : null,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 10,
        "name" : "Universities",
        "slug" : "universities",
        "parent_id" : 9,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 11,
        "name" : "Study Industries",
        "slug" : "study_industries",
        "parent_id" : 9,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 12,
        "name" : "Study Sub Industries",
        "slug" : "study_sub_industries",
        "parent_id" : 9,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 13,
        "name" : "Study Areas",
        "slug" : "study_areas",
        "parent_id" : 9,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 14,
        "name" : "User Roles",
        "slug" : "roles",
        "parent_id" : 9,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 15,
        "name" : "Resources",
        "slug" : "resources",
        "parent_id" : null,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 16,
        "name" : "Internal",
        "slug" : "internal_resources",
        "parent_id" : 15,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 17,
        "name" : "External",
        "slug" : "external_resources",
        "parent_id" : 15,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 18,
        "name" : "FAQ’s",
        "slug" : "faqs",
        "parent_id" : 15,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 20,
        "name" : "Archives",
        "slug" : "archives",
        "parent_id" : null,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 21,
        "name" : "Explore",
        "slug" : "leads_explore_records",
        "parent_id" : 20,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 22,
        "name" : "Add ons",
        "slug" : "leads_addon_records",
        "parent_id" : 20,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 23,
        "name" : "Applications",
        "slug" : "application_records",
        "parent_id" : 20,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 24,
        "name" : "Internal Staffs",
        "slug" : "internal_staffs_records",
        "parent_id" : 20,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 25,
        "name" : "External Staffs",
        "slug" : "external_staffs_records",
        "parent_id" : 20,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 26,
        "name" : "Resources",
        "slug" : "resources_records",
        "parent_id" : 20,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      },
      {
        "id" : 27,
        "name" : "Revenue",
        "slug" : "revenue",
        "parent_id" : null,
        "created_at" : "2023-02-01 01:07:43",
        "updated_at" : "2023-02-01 01:07:43"
      }
    ] as any
    )
  }
}
