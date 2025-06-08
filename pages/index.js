import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <Head>
        <title>Voyage Gourmetik</title>
        <meta name="description" content="Application des recettes du monde" />
      </Head>

      <h1 className="text-4xl font-bold mb-4">🌍 Voyage Gourmetik</h1>
      <p className="text-lg mb-8">Bienvenue ! Découvrez les meilleures recettes du monde entier 🍽️</p>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">🇲🇦 Couscous Marocain</h2>
        <p>Un plat traditionnel à base de semoule, légumes et viande. Savoureux et parfumé !</p>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Commencer
        </button>
      </div>
    </div>
  );
}
