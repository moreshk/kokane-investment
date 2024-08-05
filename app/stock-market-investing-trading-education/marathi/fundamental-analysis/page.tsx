import React from "react";
import Link from "next/link";

export default function FundamentalAnalysisIndiaMarathiPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <article className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          भारतीय बाजारपेठेतील फंडामेंटल अॅनालिसिस: एक सोपी मार्गदर्शिका
        </h1>

        <p className="text-gray-800 mb-6">
          समजा तुम्ही कार खरेदी करत आहात. तुम्ही फक्त त्याचा चमकदार बाहेरचा भाग
          बघणार नाही, नाही का? तुम्ही इंजिन, मायलेज आणि इतिहास तपासाल. स्टॉक
          मार्केटमधील फंडामेंटल अॅनालिसिस असेच आहे - कंपनीमध्ये गुंतवणूक
          करण्यापूर्वी त्याच्या आतील भागाचा अभ्यास करणे. चला, भारतीय स्टॉक
          मार्केटमध्ये हे कसे काम करते ते सोप्या भाषेत आणि उदाहरणांसह पाहूया.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          पाहण्यासाठी महत्त्वाचे आकडे (कंपनीच्या रिपोर्ट कार्डसारखे)
        </h2>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">
            <strong>प्राइस-टु-अर्निंग्स (पी/ई) रेशो</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>
                हे काय आहे: कंपनीच्या प्रत्येक रुपयाच्या नफ्यासाठी तुम्ही किती
                पैसे देत आहात.
              </li>
              <li>
                उदाहरण: जर स्टॉकची किंमत ₹100 असेल आणि कंपनी प्रति शेअर ₹5 कमावत
                असेल, तर पी/ई रेशो 20 (100 ÷ 5) असेल.
              </li>
              <li>
                असे समजा: कंपनीला तुमची गुंतवणूक परत मिळवण्यास किती वर्षे
                लागतील.
              </li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>प्राइस-टु-बुक (पी/बी) रेशो</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>
                हे काय आहे: स्टॉकची किंमत कंपनीच्या बुक व्हॅल्यूशी (ती जे मालक
                आहे त्यातून ती जे देणे लागते ते वजा केल्यानंतर) तुलना.
              </li>
              <li>
                असे समजा: घर खरेदी करण्यासारखे. बाजारातील किंमत इमारत आणि
                जमिनीच्या वास्तविक मूल्यापेक्षा जास्त आहे की कमी?
              </li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>अर्निंग्स पर शेअर (ईपीएस)</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>हे काय आहे: प्रत्येक शेअरसाठी कंपनी किती नफा कमावते.</li>
              <li>
                उदाहरण: जर एखादी कंपनी ₹100 कोटी नफा कमावत असेल आणि तिचे 10 कोटी
                शेअर्स असतील, तर ईपीएस ₹10 असेल.
              </li>
              <li>असे समजा: कंपनीच्या पिग्गी बँकेतील तुमचा वाटा.</li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>डेट-टु-इक्विटी (डी/ई) रेशो</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>
                हे काय आहे: कंपनी जे मालक आहे त्याच्या तुलनेत ती किती देणे
                लागते.
              </li>
              <li>
                असे समजा: तुमच्या होम लोनची तुमच्या बचतीशी तुलना. जास्त कर्ज
                (डेट) धोकादायक असू शकते.
              </li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>रिटर्न ऑन इक्विटी (आरओई)</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>
                हे काय आहे: कंपनी तिचे पैसे नफा मिळवण्यासाठी किती कार्यक्षमतेने
                वापरते.
              </li>
              <li>
                असे समजा: कंपनी तुमची गुंतवणूक अधिक पैशांमध्ये रूपांतरित करण्यात
                किती चांगली आहे.
              </li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>डिव्हिडंड यील्ड</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>
                हे काय आहे: स्टॉकच्या किंमतीची कंपनी डिव्हिडंड म्हणून देणारी
                टक्केवारी.
              </li>
              <li>असे समजा: बचत खात्यावरील व्याज दर, परंतु स्टॉक्ससाठी.</li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>प्रमोटर होल्डिंग</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>
                हे काय आहे: कंपनीचे संस्थापक किंवा मुख्य मालक किती प्रमाणात मालक
                आहेत.
              </li>
              <li>
                असे समजा: मालकांचा कंपनीमध्ये किती हिस्सा आहे. जर त्यांचा मोठा
                वाटा असेल, तर ते कंपनी यशस्वी करण्यासाठी कठोर परिश्रम करण्याची
                शक्यता आहे.
              </li>
            </ul>
          </li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          ही माहिती कुठे मिळेल
        </h2>

        <p className="text-gray-800 mb-4">
          हे पाककृती शोधण्यासारखे आहे - अनेक स्रोत आहेत:
        </p>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">
            कंपनीच्या वेबसाइट्स: &quot;इन्व्हेस्टर रिलेशन्स&quot; विभाग शोधा.
          </li>
          <li className="text-gray-800">
            स्टॉक एक्सचेंज वेबसाइट्स: बीएसई आणि एनएसई हे भारतातील स्टॉक्ससाठी
            मोठे बाजार आहेत.
          </li>
          <li className="text-gray-800">
            आर्थिक वेबसाइट्स: मनीकंट्रोल किंवा स्क्रीनर.इन सारख्या साइट्स स्टॉक
            माहितीसाठी विश्वकोशासारख्या आहेत.
          </li>
          <li className="text-gray-800">
            सेबी फाइलिंग्स: या कंपन्यांनी सादर करणे आवश्यक असलेली अधिकृत
            कागदपत्रे आहेत, तुमचे कर रिटर्न सादर करण्यासारखे.
          </li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          कंपन्या ही माहिती कधी सामायिक करतात
        </h2>

        <p className="text-gray-800 mb-4">
          कंपन्यांकडे त्यांचे रिपोर्ट कार्ड सामायिक करण्याचे वेळापत्रक असते:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">दर तीन महिन्यांनी (त्रैमासिक)</li>
          <li className="text-gray-800">वर्षातून एकदा (वार्षिक अहवाल)</li>
          <li className="text-gray-800">वर्षातून दोनदा (अर्धवार्षिक निकाल)</li>
          <li className="text-gray-800">
            दर तीन महिन्यांनी ते कंपनीची किती मालकी कोणाकडे आहे हे देखील सांगतात
            (शेअरहोल्डिंग पॅटर्न)
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          भारतीय बाजारपेठेबद्दल खास गोष्टी
        </h2>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">
            <strong>प्रमोटर होल्डिंग</strong>: भारतात, जेव्हा संस्थापकांकडे
            कंपनीचा मोठा भाग असतो तेव्हा आम्हाला ते आवडते. हे स्वतःच्या
            रेस्टॉरंटमध्ये शेफने जेवणासारखे आहे - एक चांगली खूण!
          </li>
          <li className="text-gray-800">
            <strong>एफआयआय/डीआयआय होल्डिंग्स</strong>: हे मोठे, व्यावसायिक
            गुंतवणूकदार आहेत. जर ते खरेदी करत असतील, तर ते बर्‍याचदा चांगली खूण
            मानली जाते.
          </li>
          <li className="text-gray-800">
            <strong>कौटुंबिक व्यवसाय</strong>: अनेक भारतीय कंपन्या कुटुंबाच्या
            मालकीच्या आहेत. ते कंपनी चांगल्या प्रकारे चालवत आहेत की नाही हे
            तपासणे महत्त्वाचे आहे.
          </li>
          <li className="text-gray-800">
            <strong>नियम आणि नियमन</strong>: भारतातील काही उद्योगांमध्ये बरेच
            नियम आहेत. उदाहरणार्थ, बँका आणि औषध कंपन्यांना कडक मार्गदर्शक
            तत्त्वांचे पालन करावे लागते.
          </li>
          <li className="text-gray-800">
            <strong>सेबी</strong>: हा स्टॉक मार्केटचा पंच आहे. ते सर्वजण न्याय्य
            खेळतात याची खात्री करतात.
          </li>
          <li className="text-gray-800">
            <strong>कर</strong>: लक्षात ठेवा, कर कंपनीच्या नफ्यातून मोठा वाटा
            घेऊ शकतात. जीएसटीसारख्या अलीकडील बदलांमुळे कंपन्या कशा काम करतात
            यावर परिणाम झाला आहे.
          </li>
          <li className="text-gray-800">
            <strong>निफ्टी आणि सेन्सेक्स</strong>: हे स्टॉक मार्केटमधील दोन
            संघांचे कर्णधार आहेत. ते तुम्हाला एकूण बाजाराची कल्पना देतात.
          </li>
        </ol>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          फंडामेंटल अॅनालिसिस कसे करावे
        </h2>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">
            <strong>आर्थिक विवरणे वाचा</strong>: हे कंपनीची बँक स्टेटमेंट्स आणि
            बजेट तपासण्यासारखे आहे.
          </li>
          <li className="text-gray-800">
            <strong>मोठी चित्र पहा</strong>: अर्थव्यवस्था चांगली चालली आहे का?
            कंपनीचा उद्योग वाढत आहे का?
          </li>
          <li className="text-gray-800">
            <strong>व्यवस्थापनाची तपासणी करा</strong>: कंपनी चालवणारे लोक चांगले
            काम करत आहेत का?
          </li>
          <li className="text-gray-800">
            <strong>कंपनीच्या ताकदी समजून घ्या</strong>: इतरांच्या तुलनेत या
            कंपनीत काय खास आहे?
          </li>
          <li className="text-gray-800">
            <strong>उद्योगाचा अभ्यास करा</strong>: या प्रकारच्या व्यवसायासाठी हा
            चांगला काळ आहे का?
          </li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          समारोप
        </h2>

        <p className="text-gray-800 mb-4">
          फंडामेंटल अॅनालिसिस हे स्टॉक मार्केटमध्ये डिटेक्टिव्ह असण्यासारखे आहे.
          तुम्ही एखादी कंपनी चांगली गुंतवणूक आहे की नाही हे ठरवण्यासाठी पुरावे
          गोळा करत आहात. लक्षात ठेवा, फक्त आकडे महत्त्वाचे नाहीत - त्या
          आकड्यांमागील कथा देखील महत्त्वाची आहे.
        </p>

        <p className="text-gray-800 mb-4">
          या मूलभूत गोष्टी समजून घेतल्याने, तुम्ही भारतीय स्टॉक मार्केटमध्ये
          अधिक चांगल्या प्रकारे गुंतवणुकीचे निर्णय घेऊ शकता. शुभेच्छा आणि यशस्वी
          गुंतवणूक!
        </p>
      </article>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          मुख्यपृष्ठावर परत जा
        </Link>
      </div>
    </main>
  );
}
