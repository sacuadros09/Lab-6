export async function traer_api() {
    try {
            const persons = await fetch('https://hearthstoneapi.com/cards').then((res) => {
                return res.json();
            });
            return persons.data;
    } catch (error) {
        console.log(error);
    }
}
