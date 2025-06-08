// Version 2 - Application Voyage Gourmetik améliorée

import { useState } from 'react';

export default function Home() { const [langue, setLangue] = useState("fr"); const [etape, setEtape] = useState(-1); const [minuteur, setMinuteur] = useState(null);

const recette = { titre: { fr: "Poulet Rôti Méditerranéen", en: "Mediterranean Roasted Chicken", ar: "دجاج مشوي على الطريقة المتوسطية" }, image: "/poulet.jpg", ingredients: { fr: ["1 poulet entier", "4 gousses d'ail", "Jus de 1 citron", "Herbes de Provence", "Huile d'olive", "Sel et poivre"], en: ["1 whole chicken", "4 garlic cloves", "Juice of 1 lemon", "Provence herbs", "Olive oil", "Salt and pepper"], ar: ["دجاجة كاملة", "4 فصوص ثوم", "عصير ليمونة", "أعشاب بروفانس", "زيت الزيتون", "ملح وفلفل"] }, etapes: { fr: [ "Préchauffez le four à 200°C.", "Frottez le poulet avec l'ail, le citron, les herbes, l'huile, le sel et le poivre.", "Placez au four pendant 1h15.", "Laissez reposer 10 minutes avant de servir." ], en: [ "Preheat the oven to 200°C.", "Rub the chicken with garlic, lemon juice, herbs, oil, salt, and pepper.", "Roast in the oven for 1h15.", "Let it rest 10 minutes before serving." ], ar: [ "سخّن الفرن إلى 200 درجة مئوية.", "افرك الدجاج بالثوم والليمون والأعشاب والزيت والملح والفلفل.", "اخبز في الفرن لمدة ساعة و15 دقيقة.", "اتركه يستريح 10 دقائق قبل التقديم." ] } };

const handleStart = () => { setEtape(0); setMinuteur(60); // Exemple : 60 secondes };

return ( <main style={{ padding: 20, fontFamily: 'sans-serif' }}> <h1>{recette.titre[langue]}</h1> <select value={langue} onChange={(e) => setLangue(e.target.value)}> <option value="fr">🇫🇷 Français</option> <option value="en">🇬🇧 English</option> <option value="ar">🇲🇦 عربي</option> </select>

<img src={recette.image} alt="plat" style={{ maxWidth: "100%", margin: "20px 0", borderRadius: 12 }} />

  <h2>{langue === "fr" ? "Ingrédients" : langue === "en" ? "Ingredients" : "المكونات"}</h2>
  <ul>
    {recette.ingredients[langue].map((item, i) => <li key={i}>{item}</li>)}
  </ul>

  <h2>{langue === "fr" ? "Étapes de préparation" : langue === "en" ? "Preparation Steps" : "خطوات التحضير"}</h2>

  {etape === -1 ? (
    <button onClick={handleStart} style={{ padding: 10, fontSize: 16, backgroundColor: '#000', color: '#fff', borderRadius: 8 }}>
      {langue === "fr" ? "Commencer la recette" : langue === "en" ? "Start Recipe" : "ابدأ الوصفة"}
    </button>
  ) : (
    <>
      <p style={{ fontSize: 18 }}>{recette.etapes[langue][etape]}</p>

      {minuteur !== null && (
        <p style={{ color: 'green' }}>⏱️ Minuteur : {minuteur} sec</p>
      )}

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setEtape(Math.max(etape - 1, 0))} disabled={etape === 0} style={{ marginRight: 10 }}>◀️</button>
        <button onClick={() => setEtape(Math.min(etape + 1, recette.etapes[langue].length - 1))} disabled={etape === recette.etapes[langue].length - 1}>▶️</button>
      </div>
    </>
  )}
</main>

); }

