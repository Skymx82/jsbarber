"use client";

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PolitiqueConfidentialitePage() {
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
              POLITIQUE DE <span className="text-gold">CONFIDENTIALITÉ</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className={`text-white/80 max-w-2xl mx-auto text-lg transition-all duration-700 delay-300 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Comment nous protégeons vos données personnelles
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
              <p className="text-white/80 mb-4">
                Chez JS Barber, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe de nos pratiques concernant la collecte, l'utilisation et le partage des informations que vous nous fournissez à travers notre site web (jsbarber.fr).
              </p>
              <p className="text-white/80 mb-4">
                Cette politique s'applique aux informations que nous collectons :
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li className="mb-2">Sur notre site web jsbarber.fr</li>
                <li className="mb-2">Dans les e-mails, SMS, et autres communications électroniques entre vous et notre site web</li>
                <li>Lors de vos interactions avec nos services de réservation en ligne</li>
              </ul>
              <p className="text-white/80 mb-4">
                Elle ne s'applique pas aux informations collectées par :
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li className="mb-2">Nous hors ligne ou via d'autres moyens, y compris sur tout autre site web exploité par nous ou un tiers</li>
                <li>Tout tiers, y compris à travers une application ou contenu qui pourrait être accessible via notre site web</li>
              </ul>
              <p className="text-white/80 mb-4">
                Veuillez lire attentivement cette politique pour comprendre nos politiques et pratiques concernant vos informations personnelles. Si vous n'acceptez pas nos politiques et pratiques, vous avez le choix de ne pas utiliser notre site web. En accédant ou en utilisant ce site web, vous acceptez cette politique de confidentialité.
              </p>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-100 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">2. Données collectées</h2>
              <p className="text-white/80 mb-4">
                Nous pouvons collecter plusieurs types d'informations auprès des utilisateurs de notre site web, notamment :
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li className="mb-2"><strong>Informations personnelles identifiables</strong> : Nom, prénom, adresse e-mail, numéro de téléphone, et autres informations similaires que vous nous fournissez volontairement lorsque vous utilisez notre formulaire de contact ou notre système de réservation.</li>
                <li className="mb-2"><strong>Informations non personnelles</strong> : Nous pouvons collecter des informations non personnelles vous concernant lors de votre interaction avec notre site. Ces informations peuvent inclure le type de navigateur, le type d'ordinateur, les pages visitées, le temps passé sur ces pages, et d'autres statistiques.</li>
                <li><strong>Informations de connexion</strong> : Comme de nombreux sites web, nous recueillons automatiquement certaines informations et les stockons dans des fichiers journaux. Ces informations peuvent inclure l'adresse IP, le type de navigateur, le fournisseur d'accès Internet (FAI), les pages de référence/sortie, le système d'exploitation, la date/l'horodatage, et les données de clickstream.</li>
              </ul>
              <h3 className="text-xl font-bold text-white mb-4">Cookies et technologies similaires</h3>
              <p className="text-white/80 mb-4">
                Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site web, comprendre comment vous interagissez avec lui, et mesurer l'efficacité de nos publicités. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé. Cependant, si vous n'acceptez pas les cookies, certaines parties de notre site peuvent ne pas fonctionner correctement.
              </p>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-200 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">3. Utilisation des données</h2>
              <p className="text-white/80 mb-4">
                Nous utilisons les informations que nous collectons à propos de vous pour :
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li className="mb-2">Fournir, maintenir et améliorer notre site web et nos services</li>
                <li className="mb-2">Traiter et gérer vos réservations</li>
                <li className="mb-2">Répondre à vos commentaires, questions et demandes</li>
                <li className="mb-2">Vous envoyer des informations techniques, des mises à jour, des alertes de sécurité et des messages de support et administratifs</li>
                <li className="mb-2">Communiquer avec vous à propos de nos produits, services, offres, promotions, et événements</li>
                <li className="mb-2">Surveiller et analyser les tendances, l'utilisation et les activités en lien avec notre site web</li>
                <li className="mb-2">Détecter, prévenir et résoudre les problèmes techniques ou de sécurité</li>
                <li>Personnaliser et améliorer votre expérience sur notre site web</li>
              </ul>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-300 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">4. Partage des données</h2>
              <p className="text-white/80 mb-4">
                Nous ne vendons, n'échangeons, ni ne louons les informations personnelles des utilisateurs à des tiers. Nous pouvons partager des informations personnelles génériques et anonymes concernant nos visiteurs et utilisateurs avec nos partenaires commerciaux, affiliés et annonceurs à des fins statistiques.
              </p>
              <p className="text-white/80 mb-4">
                Nous pouvons divulguer vos informations personnelles :
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li className="mb-2">Pour se conformer à toute loi, réglementation, procédure légale ou demande gouvernementale applicable</li>
                <li className="mb-2">Pour faire appliquer nos conditions d'utilisation ou autres accords, y compris à des fins de facturation et de recouvrement</li>
                <li className="mb-2">Si nous estimons que la divulgation est nécessaire ou appropriée pour protéger les droits, la propriété ou la sécurité de JS Barber, de nos clients ou d'autres personnes</li>
                <li>À des prestataires de services tiers qui nous aident à exploiter notre site web et à fournir des services (ces entreprises sont autorisées à utiliser vos informations personnelles uniquement dans la mesure nécessaire pour nous fournir ces services)</li>
              </ul>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-400 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">5. Sécurité des données</h2>
              <p className="text-white/80 mb-4">
                Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée, modifiées ou divulguées. De plus, l'accès à vos données personnelles est limité aux employés, agents, contractants et autres tiers qui ont un besoin professionnel de les connaître.
              </p>
              <p className="text-white/80 mb-4">
                Cependant, la transmission d'informations via Internet n'est pas complètement sécurisée. Bien que nous fassions de notre mieux pour protéger vos données personnelles, nous ne pouvons garantir la sécurité de vos données transmises à notre site web. Toute transmission est à vos propres risques.
              </p>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl mb-12 transition-all duration-700 delay-500 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">6. Vos droits</h2>
              <p className="text-white/80 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li className="mb-2"><strong>Droit d'accès</strong> : Vous avez le droit d'obtenir la confirmation que vos données personnelles sont traitées et d'accéder à ces données.</li>
                <li className="mb-2"><strong>Droit de rectification</strong> : Vous avez le droit de demander la rectification de données personnelles inexactes ou incomplètes.</li>
                <li className="mb-2"><strong>Droit à l'effacement</strong> : Vous avez le droit de demander l'effacement de vos données personnelles dans certaines circonstances.</li>
                <li className="mb-2"><strong>Droit à la limitation du traitement</strong> : Vous avez le droit de demander la limitation du traitement de vos données personnelles dans certaines circonstances.</li>
                <li className="mb-2"><strong>Droit à la portabilité des données</strong> : Vous avez le droit de recevoir les données personnelles que vous nous avez fournies dans un format structuré, couramment utilisé et lisible par machine.</li>
                <li className="mb-2"><strong>Droit d'opposition</strong> : Vous avez le droit de vous opposer au traitement de vos données personnelles dans certaines circonstances.</li>
                <li><strong>Droit de retirer votre consentement</strong> : Lorsque le traitement est basé sur votre consentement, vous avez le droit de retirer ce consentement à tout moment.</li>
              </ul>
              <p className="text-white/80 mb-4">
                Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : contact@jsbarber.fr ou par courrier à l'adresse : 123 Avenue de Toulouse, 31270 Cugnaux, France.
              </p>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-xl transition-all duration-700 delay-600 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6">7. Modifications de notre politique de confidentialité</h2>
              <p className="text-white/80 mb-4">
                Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de "dernière mise à jour" ci-dessous.
              </p>
              <p className="text-white/80 mb-4">
                Nous vous encourageons à consulter régulièrement cette politique de confidentialité pour prendre connaissance de tout changement. Les modifications apportées à cette politique de confidentialité sont effectives lorsqu'elles sont publiées sur cette page.
              </p>
              <p className="text-white/80 mb-4">
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
              </p>
              <p className="text-white/80 mb-8">
                JS Barber<br />
                123 Avenue de Toulouse<br />
                31270 Cugnaux<br />
                France<br />
                Email : contact@jsbarber.fr<br />
                Téléphone : 06 12 34 56 78
              </p>
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
