const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
    data: [
      {
        nome: "Honda CRF 450 RX",
        imagem: "https://www.honda.com.br/motos/sites/hda/files/2024-11/imagem-home-honda-crf-450-lateral-vermelha.webp",
        preco: 35000,
        categoria: "Moto",
        marca: "Honda"
      },
      {
        nome: "Yamaha MT-07",
        imagem: "https://th.bing.com/th/id/OIP.u8K1ebNPjDZnk1PTu3Ow0QHaE8?w=302&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        preco: 42000,
        categoria: "Moto",
        marca: "Yamaha"
      },
      {
        nome: "CAPACETE LS2 THUNDER CARBON GP SOLID",
        imagem: "https://motorsports.vtexassets.com/arquivos/ids/189797-1200-auto?v=638944241579200000&width=1200&height=auto&aspect=true",
        preco: 4500,
        categoria: "Acessório",
        marca: "LS2"
      },
      {
        nome: "Luva X11",
        imagem: "https://www.bing.com/th?id=OPHS.JEL2E37a4AhkIw474C474&o=5&pid=21.1&w=128&h=188&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        preco: 150,
        categoria: "Acessório",
        marca: "X11"
      },
      {
        nome: "Jaqueta Alpinestars",
        imagem: "https://www.bing.com/th?id=OPHS.LX0h02bhGcX%2fDw474C474&o=5&pid=21.1&w=128&h=148&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        preco: 1200,
        categoria: "Acessório",
        marca: "Alpinestars"
      },
      {
        nome: "BMW S1000RR",
        imagem: "https://th.bing.com/th/id/OIP.mqIEx5GXcfffgQxol0ycNAHaEK?w=163&h=108&c=7&qlt=90&bgcl=1b7937&r=0&o=6&dpr=1.3&pid=13.1",
        preco: 120000,
        categoria: "Moto",
        marca: "BMW"
      },
      {
        nome: "Diablo Rosso",
        imagem: "https://www.bing.com/th?id=OPHS.F6Et2SDYUOGvOQ474C474&o=5&pid=21.1&w=128&h=188&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        preco: 600,
        categoria: "Componente",
        marca: "Pirelli"
      },
      {
        nome: "Óleo Motul",
        imagem: "https://www.bing.com/th?id=OPHS.n0xXC9HB1Y1bAQ474C474&o=5&pid=21.1&w=128&h=188&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        preco: 70,
        categoria: "Componente",
        marca: "Motul"
      },
      {
        nome: "Filtro K&N",
        imagem: "https://res.cloudinary.com/knfilters-com/image/upload/c_lpad,dpr_2.0,f_auto,h_540,q_auto,w_540/v1/media/catalog/product/B/M/BM-1324_1.jpg?_i=AB",
        preco: 250,
        categoria: "Componente",
        marca: "K&N"
      },
      {
        nome: "Escapamento Akrapovic",
        imagem: "https://d1sfhav1wboke3.azureedge.net/ImageServer/Apim2Media/Images/20716/09e8aea5-76ef-4802-8e79-faf29201ae46.png",
        preco: 3500,
        categoria: "Componente",
        marca: "Akrapovic"
      }
    ]
  });

  console.log("Seed executado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });