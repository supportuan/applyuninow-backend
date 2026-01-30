#!/bin/bash

BASE_URL="${BASE_URL:-http://localhost:3333}"
EMAIL="${1:-test@example.com}"

echo "🧪 Testing Password Reset Endpoint"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📍 Endpoint: ${BASE_URL}/forgot-password"
echo "📧 Email: ${EMAIL}"
echo ""

RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "${BASE_URL}/forgot-password" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"${EMAIL}\"}")

HTTP_BODY=$(echo "$RESPONSE" | sed '$d')
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

echo "📤 Request sent..."
echo ""
echo "📥 Response:"
echo "$HTTP_BODY" | jq '.' 2>/dev/null || echo "$HTTP_BODY"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 HTTP Status Code: ${HTTP_CODE}"
echo ""

case "$HTTP_CODE" in
  200)
    echo "✅ SUCCESS: Password reset email should be sent"
    echo "   Check your email inbox or Mailtrap"
    ;;
  400)
    echo "⚠️  CLIENT ERROR: Invalid request or email not found"
    echo "   Verify the email exists in the database"
    ;;
  500)
    echo "❌ SERVER ERROR: Mail service may be misconfigured"
    echo "   Check server logs and mail configuration"
    ;;
  *)
    echo "❓ UNKNOWN: Unexpected status code"
    ;;
esac

echo ""
echo "💡 Tip: Check server console for detailed logs"
echo ""
