"use client";

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MentionsLegalesPage() {
  const [animateSection, setAnimateSection] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setAnimateSection(true);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="relative py-20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              MENTIONS <span className="text-gold">LÉGALES</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className={`text-white/80 max-w-2xl mx-auto text-lg transition-all duration-700 delay-300 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Informations légales concernant le site JS Barber
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">1. Édition du site</h2>
              <p className="text-white/80 mb-4">
                Le site <strong>JS Barber</strong> est édité par la société JS Barber, société à responsabilité limitée au capital de [montant du capital], immatriculée au Registre du Commerce et des Sociétés de Toulouse sous le numéro [numéro RCS], dont le siège social est situé à :
              </p>
              <p className="text-white/80 mb-6">
                123 Avenue de Toulouse<br />
                31270 Cugnaux<br />
                France<br />
                Numéro de téléphone : 06 12 34 56 78<br />
                Email : contact@jsbarber.fr
              </p>
              <p className="text-white/80 mb-4">
                <strong>Directeur de la publication :</strong> [Nom du directeur de publication]
              </p>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-100 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">2. Hébergement</h2>
              <p className="text-white/80 mb-4">
                Le site JS Barber est hébergé par Vercel Inc., dont le siège social est situé à :
              </p>
              <p className="text-white/80 mb-6">
                Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 transition-colors">https://vercel.com</a>
              </p>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-200 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">3. Propriété intellectuelle</h2>
              <p className="text-white/80 mb-4">
                L'ensemble du contenu du site JS Barber, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société JS Barber à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p className="text-white/80 mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de JS Barber. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre.
              </p>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-300 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">4. Liens hypertextes et cookies</h2>
              <p className="text-white/80 mb-4">
                Le site JS Barber contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation de JS Barber. Cependant, JS Barber n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
              </p>
              <p className="text-white/80 mb-4">
                La navigation sur le site JS Barber est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
              </p>
              <p className="text-white/80 mb-4">
                Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l'installation des cookies :
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li className="mb-2">Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</li>
                <li className="mb-2">Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour désactiver les cookies.</li>
                <li className="mb-2">Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</li>
                <li>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences. Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.</li>
              </ul>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-400 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">5. Protection des données personnelles</h2>
              <p className="text-white/80 mb-4">
                En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
              </p>
              <p className="text-white/80 mb-4">
                A l'occasion de l'utilisation du site JS Barber, peuvent être recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site JS Barber, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
              </p>
              <p className="text-white/80 mb-4">
                En tout état de cause JS Barber ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site JS Barber. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site JS Barber l'obligation ou non de fournir ces informations.
              </p>
              <p className="text-white/80 mb-4">
                Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
              </p>
              <p className="text-white/80 mb-4">
                Aucune information personnelle de l'utilisateur du site JS Barber n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de JS Barber et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site JS Barber.
              </p>
              <p className="text-white/80 mb-4">
                Pour plus d'informations concernant la façon dont nous traitons vos données, veuillez consulter notre <a href="/politique-confidentialite" className="text-gold hover:text-gold/80 transition-colors">Politique de Confidentialité</a>.
              </p>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl transition-all duration-700 delay-500 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">6. Droit applicable et attribution de juridiction</h2>
              <p className="text-white/80 mb-4">
                Tout litige en relation avec l'utilisation du site JS Barber est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Toulouse.
              </p>
              <p className="text-white/80 mb-4">
                <strong>Les principales lois concernées :</strong>
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li className="mb-2">Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</li>
                <li className="mb-2">Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</li>
                <li>Règlement général sur la protection des données (RGPD) entré en vigueur le 25 mai 2018.</li>
              </ul>
              <p className="text-white/80 mt-8">
                <strong>Dernière mise à jour :</strong> 10 avril 2025
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
