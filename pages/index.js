import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bake Cake</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Gemstones&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section>
        <div
          className="flex items-center justify-between mx-auto py-5"
          style={{ maxWidth: 1150 }}
        >
          <div className="text-2xl font-bold text-red-700">Bake Cake</div>
          <div className="flex items-center gap-5">
            <div>Services</div>
            <div>Gallery</div>
            <div>About Us</div>
            <div className="bg-red-700 text-lg cursor-pointer font-semibold inline-block px-10 py-3 rounded-md text-white">
              Contact Us
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto py-16" style={{ maxWidth: 1150 }}>
        <div className="grid grid-cols-2 items-center h-full">
          <Image
            className="absolute top-0 right-20 -z-10"
            src="/images/balloon.png"
            alt="Balloon"
            width={200}
            height={200}
          />
          <div>
            <div
              style={{ fontFamily: '"Rubik Gemstones", cursive' }}
              className="text-5xl leading-tight mb-5 text-slate-900"
            >
              Customized <span className="text-red-700">Cakes</span> For Your Events
            </div>
            <div className="mb-7 text-lg text-slate-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              minima ipsam fugit, ipsa culpa quibusdam ullam harum accusamus quas a.
            </div>
            <div className="bg-red-700 text-lg cursor-pointer font-semibold inline-block px-10 py-3 rounded-md text-white">
              Order Now
            </div>
          </div>
          <div className="place-self-center bg-gradient-to-t from-red-200 to-brown-50 rounded-full p-5">
            <Image
              src="/images/cake.png"
              alt="Cake"
              width={450}
              height={450}
            />
          </div>
        </div>
      </section>
    </>
  );
}
