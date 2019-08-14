export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME, //"udagramwaghdev",
   "password": process.env.POSTGRESS_PASSWORD, //"managetrue",
   "database": process.env.POSTGRESS_DATABASE, //"udagramwaghdev",
   "host": process.env.POSTGRESS_HOST, //"udagramwaghdev.cbpj5v8gdl7x.us-west-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REIGION, //"us-west-1",
    "aws_profile": process.env.AWS_PROFILE, //"default",
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET //"udagram-wagh-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
