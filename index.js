module.exports.handler = async (event) => {
  console.log(process.env.API)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        name:"willow",
        api:process.env.API
      },
      null,
      2
    ),
  };
};
