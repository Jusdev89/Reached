const db = require("./db");

const create = (userId, name, organizationName) => {
  return db.oneOrNone(`
    INSERT INTO
      campaigns (user_id, name, organization_name)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
    `,
    [
      userId,
      name,
      organizationName
    ])
  .catch(error => {
    console.error(error.message);
    throw error;
  });
};

const addAutoResponse = (id, userId, autoResponse) => {
  return db.one(`
    UPDATE campaigns
    SET user_id=$2, auto_response=$3
    WHERE id=$1
    `,
    [id, userId, autoResponse])
  .catch(error => {
    console.error(error.message);
    throw error;
  });
};

module.exports = {
  create,
  addAutoResponse
};
