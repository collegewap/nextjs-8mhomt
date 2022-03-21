// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  let states = [];
  try {
    console.log('Country: ', req.query.country);
    const response = await fetch(
      'https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json'
    );

    const data = await response.json();
    states = data.countries
      .find((item) => item.country === req.query.country)
      .states.map((item) => ({ key: item, value: item }));
  } catch (e) {
    console.log(e);
  }

  res.status(200).json(states);
};
