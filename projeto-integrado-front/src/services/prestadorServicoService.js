export default {
    getAllPrestadores: () => {
        return new Promise((resolve, reject) => {
            const prestadores = [
                {
                    text: 'Emanuel Pinturas',
                    categoria: "Pintura residencial",
                    url: 'https://cdn.amigoconstrutor.com.br/wp-content/uploads/2018/04/pexels-blue-bird-7217928-1024x682.jpg',
                    avaliacao: 5
                },
                {
                    text: 'Axel pinturas',
                    categoria: "Pintura residencial",
                    url: 'https://www.dfpinturasereformas.com.br/uploads/1009202001171238974378.jpg',
                    avaliacao: 1.5
                },
                {
                    text: 'Get Ninjas',
                    categoria: "Pintura residencial",
                    url: 'https://www.dfpinturasereformas.com.br/uploads/1009202001173296717388.jpg',
                    avaliacao: 4.2
                },
                {
                    text: 'Loja do encanador',
                    categoria: "Encanamento",
                    url: 'https://guimaraesencanador.com.br/wp-content/uploads/2018/03/encanador2.png',
                    avaliacao: 3.4
                }
            ];
            resolve(prestadores);
        });
    }
}