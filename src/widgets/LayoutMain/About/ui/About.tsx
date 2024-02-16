import styles from './About.module.scss'

export default function About() {
  return (
    <>
      <section className={`${styles.about__section} container md:t-10 md:pb-[30px]`}>
        <div id='about' className={`${styles.image} rounded-[15px] md:pt-[95px] md:pr-[247px] md:pl-[82px] pb-[87px]`}>
          <div className={`${styles.image__inside} rounded-[15px] mb-5`}>
            <h2 className={styles.image__title}>ТОО STROY DEPOT - официальный дистрибьютор <span>Tytan</span>, <span>Mapei</span>, <span>Henkel</span> с опытом работы более 12 лет</h2>
            <p>Сотрудничая с мировыми производителями строительной химии,  мы предлагаем исключительно высококачественную продукцию, отвечающую всем нормам и стандартам качества ISO.</p>
            <h4 className='mt-10'>Целью компании является качественная и эффективная дистрибьюторская деятельность. Мы стремимся завоевать и удержать позицию лидирующей компании по реализации строительной химии, стремимся стать надежным партнером для клиентов и потребителей продукции и услуг компании.</h4>
          </div>
        </div>
        <div className={styles.box__flex}>
          <div className={`${styles.box} md:py-5 md:px-[45px]`}>
            <h1 className={styles.box__number}>01</h1>
            <h4>Квалифицированные специалисты</h4>
          </div> 
          <div className={`${styles.box} md:py-5 md:px-[45px]`}>
            <h1 className={styles.box__number}>02</h1>
            <h4>Оригинальная продукция</h4>
          </div> 
          <div className={`${styles.box} md:py-5 md:px-[45px]`}>
            <h1 className={styles.box__number}>03</h1>
            <h4>Гарантия качества</h4>
          </div>
        </div>
      </section>

      <div className={styles.mobile}>
        <div id='about' className={`${styles.image} md:pt-[95px] md:pr-[247px] md:pl-[82px] pb-[87px]`}>
          <div className={`${styles.image__inside} rounded-[15px] mb-5`}>
            <h2 className={styles.image__title}>ТОО STROY DEPOT - официальный дистрибьютор <span>Tytan</span>, <span>Mapei</span>, <span>Henkel</span> с опытом работы более 12 лет</h2>
            <p>Сотрудничая с мировыми производителями строительной химии,  мы предлагаем исключительно высококачественную продукцию, отвечающую всем нормам и стандартам качества ISO.</p>
            <h4 className='mt-10'>Целью компании является качественная и эффективная дистрибьюторская деятельность. Мы стремимся завоевать и удержать позицию лидирующей компании по реализации строительной химии, стремимся стать надежным партнером для клиентов и потребителей продукции и услуг компании.</h4>
          </div>
        </div>
        <div className={styles.mobile__container}>
          <div className={styles.box__flex__mobile}>
            <div className={`${styles.box__mobile} md:py-5 md:px-[45px]`}>
              <h1 className={styles.box__number}>01</h1>
              <h4>Квалифицированные специалисты</h4>
            </div> 
            <div className={`${styles.box__mobile} md:py-5 md:px-[45px]`}>
              <h1 className={styles.box__number}>02</h1>
              <h4>Оригинальная продукция</h4>
            </div> 
            <div className={`${styles.box__mobile} md:py-5 md:px-[45px]`}>
              <h1 className={styles.box__number}>03</h1>
              <h4>Гарантия качества</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}