module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8e741e656cd21e4decf0ac67782ac6d2'),
  },
});
