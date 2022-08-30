const handler = async (event) => {
  const superpeople = [
    {
      name: "Batman",
      superpower: "Martial arts",
      color: "#000000",
    },
    {
      name: "Spiderman",
      superpower: "Spideysense",
      color: "#a71814",
    },
    {
      name: "Gamora",
      superpower: "Accelerated healing factor",
      color: "#9aac00",
    },
  ];
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(superpeople),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
