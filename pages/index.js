import { useState } from 'react';

export default function Home() {
  const [langue, setLangue] = useState("fr");
  const [etape, setEtape] = useState(0);

  const recette = {
    titre: {
      fr: "Poulet Rôti Méditerranéen",
      en: "Mediterranean Roasted Chicken",
      ar: "دجاج مشوي على الطريقة المتوسطية"
    },
    ingredients: {
      fr: ["1 poulet entier", "4 gousses d'ail", "Jus de 1 citron", "Herbes de Provence", "Huile d'olive", "Sel et poivre"],
      en: ["1 whole chicken", "4 garlic cloves", "Juice of 1 lemon", "Provence herbs", "Olive oil", "Salt and pepper"],
      ar: ["دجاجة كاملة", "4 فصوص ثوم", "عصير ليمونة", "أعشاب بروفانس", "زيت الزيتون", "ملح وفلفل"]
    },
    etapes: {
      fr: ["Préchauffez le four à 200°C.", "Frottez le poulet avec les ingrédients.", "Placez au four pendant 1h15.", "Laissez reposer 10 minutes."],
      en: ["Preheat the oven to 200°C.", "Rub the chicken with ingredients.", "Roast for 1h15.", "Let rest 10 minutes."],
      ar: ["سخّن الفرن إلى 200 درجة.", "افرك الدجاج بالمكونات.", "اخبز لمدة ساعة و15 دقيقة.", "اتركه يستريح 10 دقائق."]
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>{recette.titre[langue]}</h1>
      <select value={langue} onChange={(e) => setLangue(e.target.value)}>
        <option value="fr">🇫🇷 Français</option>
        <option value="en">🇬🇧 English</option>
        <option value="ar">🇲🇦 عربي</option>
      </select>

      <h2>{langue === "fr" ? "Ingrédients" : langue === "en" ? "Ingredients" : "المكونات"}</h2>
      <ul>
        {recette.ingredients[langue].map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2>{langue === "fr" ? "Étapes" : langue === "en" ? "Steps" : "الخطوات"}</h2>
      <p>{recette.etapes[langue][etape]}</p>

      <button onClick={() => setEtape(Math.max(etape - 1, 0))}>◀️</button>
      <button onClick={() => setEtape(Math.min(etape + 1, recette.etapes[langue].length - 1))}>▶️</button>
    </main>
  );
}