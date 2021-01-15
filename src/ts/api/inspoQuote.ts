const url = 'https://type.fit/api/quotes';

export const getQuote = async () => {
    const data = await (await fetch(url)).json()
    const randomNum = Math.floor(Math.random() * data.length);
    console.log(data[randomNum]);

}

