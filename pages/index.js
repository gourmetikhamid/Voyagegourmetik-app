
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-800 p-6">
      <Head>
        <title>Voyage Gourmetik</title>
        <meta name="description" content="Recettes du monde entier" />
      </Head>

      <h1 className="text-4xl font-bold mb-4">🌍 Voyage Gourmetik</h1>
      <p className="text-lg mb-8">Bienvenue ! Découvrez les meilleures recettes du monde entier 🍽️</p>

      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">🇲🇦 Couscous Marocain</h2>
        <p>Un plat traditionnel à base de semoule, légumes et viande. Savoureux et parfumé !</p>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Commencer
        </button>
      </div>
    </div>
  );
}
