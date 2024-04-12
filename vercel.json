{
  "builds": [
    { "src": "frontend-js/main.js", "use": "@vercel/static-build" }
  ],
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "frontend-js/main.js" }
  ]
}
