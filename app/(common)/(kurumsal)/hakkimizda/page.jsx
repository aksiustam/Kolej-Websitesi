import img from "@/public/assets/common/aboutus.jpg";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "@/public/css/Home.css";
import { FaRegLightbulb } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import "@/public/css/Portfolio.css";
const page = () => {
  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h6 className="tw-text-shadow-md">HAKKIMIZDA</h6>
        </div>
      </div>
      <section>
        <Container className="tw-py-4 md:tw-py-20">
          <div className="SelfDevelopment md:tw-p-12 ">
            <Row>
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                <div className="tw-h-60 tw-w-60 md:tw-h-full md:tw-w-full">
                  <Image
                    src={img}
                    alt="Hakkimizda"
                    width={1200}
                    height={1200}
                    className="img-fluid mx-auto tw-border-8 tw-border-sky-800 tw-rounded-full"
                  />
                </div>
              </Col>
              <Col xl={8} lg={8} md={12} sm={12} xs={12} className="tw-mb-16">
                <div className="SelfDevelopment-Content !tw-mt-1">
                  <h5 className="!tw-text-3xl tw-my-3 !tw-text-black !tw-font-extrabold">
                    Tarihçemiz
                  </h5>
                  <p className="!tw-font-bold tw-mb-4 !tw-text-base">
                    Eğitime gönül vermenin ülke geleceğine ne denli fayda
                    sağlayacağının farkındalığına sahip olan Boğaziçi Koleji
                    eğitime, bilime, gelişime sevdalı bir kurumdur. Dimağındaki
                    çağdaş eğitim düsturuyla eğitime öncü hizmetler vermektedir.
                  </p>
                  <p className="!tw-font-bold tw-mb-4 !tw-text-base">
                    Eğitim dünyasındaki değişiklikleri yakından takip ederek
                    öğrencilerine ideal eğitim koşulları sağlamayı, Atatürk ilke
                    ve inkılâplarına bağlı, milli ve manevi değerlerine sahip
                    çıkan, öz güven sahibi bireyler yetiştirmek amacıyla 20 yıl
                    öncesinde dershanecilik ile başlayan eğitim serüvenimiz 2015
                    yılında Anadolu Lise, Üniversite Hazırlık Kursu ve Özel
                    Öğretim Kursu ile hızla devam etti.
                  </p>
                  <p className="!tw-font-bold !tw-text-base">
                    2017 yılında ise Konya’ da bir ilk olan butik ortaokul ile
                    ’’Her çocuk özeldir.’’ düşüncesinden hareketle
                    hizmetinizdeyiz.
                  </p>
                </div>
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <Row>
                  <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    {" "}
                    <div className="tw-p-4 tw-border " data-aos="fade-up">
                      <div className="tw-text-4xl tw-text-red-600 tw-flex tw-items-center tw-gap-3 tw-mb-4">
                        <FaRegLightbulb size={36} />
                        Vizyonumuz
                      </div>
                      <p className="!tw-font-bold">
                        Geleceğin teminatı olan çocuklarımızı çağdaş dünya
                        insanı şuuruna sahip bireylere dönüştürmek; bilginin
                        gücüne inanan, bilgisini insanlık yararına kullanan,
                        hümanist, mutlu, duyarlı gençler yetiştirmek,
                        öğrencilerimizin ve okulumuzun adını ulusal ve
                        uluslarası düzeyde duyurmak temel hedefimizdir.
                      </p>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <div className="tw-p-4 tw-border " data-aos="fade-up">
                      <div className="tw-text-4xl tw-text-red-600 tw-flex tw-items-center tw-gap-3 tw-mb-4">
                        <GiArcheryTarget size={36} />
                        Misyonumuz
                      </div>
                      <p className="!tw-font-bold">
                        Boğaziçi Koleji olarak misyonumuz; zengin geçmişinden
                        aldığı güçle, kendisine emanet edilen öğrencilerini
                        sosyal becerileri gelişmiş, etik değerlere saygılı,
                        çevre sorunlarına duyarlı, insiyatif sahibi, takım
                        ruhuna sahip, başarılı, mutlu dünya vatandaşı bireylere
                        dönüştürmek ve geleceğe hazırlamaktır.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
