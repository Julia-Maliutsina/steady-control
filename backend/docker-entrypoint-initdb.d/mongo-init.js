print('Start #################################################################');
db = db.getSiblingDB('admin');
db.auth('root', 'example');
print('Auth ##################################################################');
db = db.getSiblingDB('citizens');
db.createUser({
  user: 'user',
  pwd: 'password',
  roles: [
    {
      role: 'dbOwner',
      db: 'citizens',
    },
  ],
});
print('User ##################################################################');
db.createCollection('init');
