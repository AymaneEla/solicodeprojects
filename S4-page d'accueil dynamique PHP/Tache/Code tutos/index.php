<?php

$articles=[
   [
    'id'=>1,
    'titre'=> 'Comment bien débuter avec Tailwind CSS en 2026 ?',
    'contenu' => 'Découvrez les concepts fondamentaux de Tailwind CSS...',
    'image' => 'article-example.png',
    'date_creation'=> '2026-02-14',
    'categorie_label' => 'Développement',
    'categorie_color' => 'bleu'
   ],

   [
    'id'=> 2,
    'titre' => 'L\'importance des micro-interactions',
    'contenu' => 'Une interface belle n\'est pas suffisante. Comprendre comment animer de petites actions',
    'image' => 'article-example.png',
    'date_creation' => '2026-02-10',
    'categorie_label' => 'UI / UX',
    'categorie_color' => 'rose'
   ]
];



echo "this is for first article : ". $articles[0]['titre']. "(" . $articles[0]['categorie_label']. ")" .  "<br> |this is for the second article : ". $articles[1]['titre']. "(" .$articles[1]['categorie_label']. ")";