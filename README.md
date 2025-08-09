
Papaya Padel - ZIP ready for Railway (light minimal design)

Steps to deploy (no terminal required):
1. Go to https://railway.app and log in.
2. New Project -> Deploy from ZIP -> upload papaya_padel_final.zip
3. In Railway project settings, add Environment Variables:
   MONGODB_URI = <your MongoDB Atlas connection string>
   JWT_SECRET = <choose a secret, e.g. papaya_secret_2025>
4. Deploy. After build completes, open the public URL Railway provides.
5. Use POST /api/seed to create demo tournaments, and GET /api/tournaments to view them.
