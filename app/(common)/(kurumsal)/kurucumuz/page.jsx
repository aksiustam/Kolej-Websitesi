import React from "react";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "@/public/css/Home.css";
import mudur from "@/public/assets/common/mudur.jpg";
import "@/public/css/Portfolio.css";
const page = () => {
  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md">MÜDÜRÜMÜZ</h6>
        </div>
      </div>
      <section>
        <Container className="tw-my-12">
          <div className="SelfDevelopment tw-p-12">
            <Row>
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                <div>
                  <Image
                    src={mudur}
                    alt="Genel Müdürümüz"
                    width={1200}
                    height={1200}
                    className="tw-object-contain"
                  />
                </div>
              </Col>
              <Col xl={8} lg={8} md={12} sm={12} xs={12}>
                <div className="SelfDevelopment-Content !tw-mt-1">
                  <h5 className="!tw-text-3xl tw-my-3 !tw-text-black !tw-font-extrabold">
                    Kuruluş Müdürümüz
                  </h5>
                  <p className="!tw-font-semibold tw-mb-4 !tw-text-base">
                    Bütüncül yaklaşımı ilke kabul edinen Boğaziçi Eğitim
                    Kurumları; kültürel, sanatsal, sportif ve akademik
                    çalışmalarını eş güdümlü yürütüyor. Aynı zamanda yabancı dil
                    bilgisi ile de fark yaratacak nesiller yetiştirme amacıyla
                    eğitimde emin adımlarla yürüyor.
                  </p>
                  <p className="!tw-font-semibold tw-mb-4 !tw-text-base">
                    Her şeyden daha önemli gördüğümüz “mutlu birey”ler
                    yetiştirme gayesi projelerimizi, etkinliklerimizi
                    zenginleştiriyor ve daha verimli hale getiriyor. Aynı
                    zamanda mutlu ve eğitime tutkun bir ekiple çalışıyor olmak
                    da bizleri daima bir adım öne taşıyor.
                  </p>
                  <p className="!tw-font-semibold tw-mb-4 !tw-text-base">
                    Çalışmanın, çetin yollarda mücadele edebilmenin önemini
                    mütemadiyen vurgulayan Mustafa Kemal Atatürk’ün hedeflediği
                    çizgide ilerleyebilmek yegâne ümidimizdir. Nasıl ki zorlu
                    koşullara rağmen bıkmadan usanmadan; akılla, erdemle,
                    aidiyetle başarılar elde edilmiş bizler de Boğaziçi ailesi
                    olarak eğitim adına, bir ülke geleceği adına elimizden ne
                    geliyorsa yapmaya hazırız. Gereken azme ve inanca sahip
                    olduğumuzu ifade etmekten asla kaçınmıyor ve bilakis bunu
                    tüm gücümüzle ve itikadımızla bildirmek istiyoruz.
                  </p>
                  <p className="!tw-font-semibold tw-mb-4 !tw-text-base">
                    Sıkı sıkı tutunduğumuz azme, azmin getirilerine yürekten
                    inanıyor, istikbale ışık saçan yolculuğumuza heyecanla devam
                    ediyoruz.
                  </p>
                  <p className="!tw-font-extrabold tw-mb-4 !tw-text-base">
                    Mehmet ÇAYLALI <br /> Kurucu / Genel Müdür
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
