import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import "@/public/css/Home.css";
import "@/public/css/Portfolio.css";
const page = () => {
  return (
    <>
      {" "}
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md">Eğitim Sistemimiz</h6>
        </div>
      </div>
      <section>
        <Container className="tw-my-12">
          <div className="SelfDevelopment tw-p-8">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="SelfDevelopment-Content !tw-mt-1">
                  <div>
                    <h1 className="tw-text-3xl tw-font-bold tw-mb-12">
                      Eğitim Uygulamaları Özeti
                    </h1>

                    <p className="!tw-font-bold tw-mb-6 !tw-text-base">
                      Maya Education programı, öğrenci-öğretmen-veli
                      ilişkilerini sağlam temellere oturtmayı amaçlayan bir
                      eğitim modelidir. Bu program, tüm öğrencilerin etkin
                      katılımını sağlamak için düzenli buluşmalar ve etkinlikler
                      içerir. Öğretmenlerin akademik başarılarını artırmayı,
                      öğrencilerin gelişimlerini desteklemeyi ve velilerin aktif
                      katılımını teşvik eder. Bu sayede eğitim süreci daha
                      bütüncül ve verimli hale gelir.
                    </p>
                  </div>
                  <div>
                    <h2 className="tw-text-2xl tw-font-bold tw-mb-6">
                      Veli Oryantasyon Programı (VOP)
                    </h2>

                    <p className="!tw-font-bold tw-mb-2 !tw-text-base">
                      VOP, velilerin okulun fiziki şartlarına, eğitim kadrosuna
                      ve eğitim uygulamalarına aşina olmalarını sağlamak ve
                      velilerin sorumluluklarını fark etmelerini amaçlar.
                      Program kapsamında bireysel veli eğitimleri ve
                      toplantıları yapılmaktadır.
                    </p>

                    <p className="!tw-font-bold tw-mb-6 !tw-text-base">
                      Bireysel veli toplantıları randevu sistemi ile organize
                      edilip her öğrenci ve veliye özel zamanlar ayrılmaktadır.
                    </p>
                  </div>
                  <div>
                    <h2 className="tw-text-2xl tw-font-bold tw-mb-6">
                      Öğretimde Sınav Koçluğu ve Ajanda Sistemi
                    </h2>

                    <h3 className="tw-text-xl tw-font-bold tw-mb-6">
                      Sorun ve Çözüm
                    </h3>
                    <p className="!tw-font-bold tw-mb-4 !tw-text-base">
                      Öğrencilerin düzenli ve sistemli ders çalışma
                      alışkanlıklarının olmaması yaygın bir sorundur. Rehberlik
                      servisinin birebir veya grup terapileri ve yaşam koçluğu
                      teknikleri ile bu sorun büyük oranda çözülmektedir.
                    </p>

                    <h3 className="tw-text-xl tw-font-bold tw-mb-6">
                      Ajanda Sistemi
                    </h3>
                    <p className="!tw-font-bold tw-mb-4 !tw-text-base">
                      Günümüz öğrencilerinin yoğun programlarını düzenlemeleri
                      için ajanda sisteminin uygulanması önerilmektedir. Bu
                      sayede öğrencilerin faaliyetleri planlı bir şekilde
                      yapılabilir ve ders başarılarında olumlu etkiler
                      gözlenebilir.
                    </p>
                  </div>
                  <div>
                    <h2 className="tw-text-2xl tw-font-bold tw-mb-6">
                      Akademik Check-Up Sistemi
                    </h2>

                    <h3 className="tw-text-xl tw-font-bold tw-mb-6">
                      Amaç ve Kapsam
                    </h3>
                    <p className="!tw-font-bold tw-mb-4 !tw-text-base">
                      Bu program, öğrencilerin eksikliklerini belirlemek ve bu
                      eksiklikleri gidermek amacıyla kademeli olarak belirli
                      aralıklarla uygulanmaktadır.
                    </p>

                    <h3 className="tw-text-xl tw-font-bold tw-mb-6">
                      Teşhis Aşaması
                    </h3>
                    <ul className="">
                      <li className="!tw-font-bold !tw-text-base tw-mb-4">
                        <strong className="tw-text-black">
                          ● Check-Up Sınavları:
                        </strong>{" "}
                        Temel derslerden ayda bir kez konu tarama sınavları
                        yapılır.
                      </li>
                      <li className="!tw-font-bold !tw-text-base tw-mb-4">
                        <strong className="tw-text-black">
                          ● Analiz Sistemi:
                        </strong>{" "}
                        Sınav sonuçları analiz edilerek öğrencinin eksik olduğu
                        konular belirlenir ve tam öğrenme modeli uygulanır.
                      </li>
                      <li className="!tw-font-bold !tw-text-base tw-mb-4">
                        <strong className="tw-text-black">
                          ● Öğretmen ve Veli Görüşleri:
                        </strong>{" "}
                        Veliler, sınıf koçları, rehber öğretmenler ve ders
                        öğretmenleri arasında bilgi alışverişi yapılır.
                      </li>
                    </ul>

                    <h3 className="tw-text-xl tw-font-bold tw-mb-6">
                      Tedavi Aşaması
                    </h3>
                    <ul>
                      <li className="!tw-font-bold !tw-text-base tw-mb-4">
                        <strong className="tw-text-black">
                          ● Ajanda Takip Sistemi:
                        </strong>{" "}
                        Öğrencilerin ders çalışma programları, belirlenen eksik
                        konulara ağırlık verilerek düzenlenir.
                      </li>
                      <li className="!tw-font-bold !tw-text-base tw-mb-4">
                        <strong className="tw-text-black">
                          ● Analiz Etütleri:
                        </strong>{" "}
                        Cumartesi günleri düzenlenen etütler ile öğrencilerin
                        eksikleri tamamlanır.
                      </li>
                      <li className="!tw-font-bold !tw-text-base tw-mb-4">
                        <strong className="tw-text-black">
                          ● Check-Up Rehberlik Programı:
                        </strong>{" "}
                        Öğrencilerin kendi eksiklerini keşfetmelerine yardımcı
                        olunur.
                      </li>
                      <li className="!tw-font-bold !tw-text-base tw-mb-4">
                        <strong className="tw-text-black">
                          ● Uzman Pedagog Uygulamaları:
                        </strong>{" "}
                        İhtiyaç duyan öğrenciler uzman pedagoglardan yardım
                        alır.
                      </li>
                    </ul>
                  </div>
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
