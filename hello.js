exports.handeler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from serverless api",
      }),
    };
  };
  