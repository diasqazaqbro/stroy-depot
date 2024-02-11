import styles from './About.module.scss'

export const About = () => {
  return (
    <section className="container pt-10 pb-[30px]">
      <div id='about' className={`${styles.image} rounded-[15px] pt-[95px] pr-[247px] pl-[82px] pb-[87px]`}>
        <div className={`${styles.image__inside} rounded-[15px] mb-5`}>
          <h2 className={styles.image__title}>ТОО STROY DEPOT - официальный дистрибьютор <span>Tytan</span>, <span>Mapei</span>, <span>Henkel</span> с опытом работы более 12 лет</h2>
          <p>Сотрудничая с мировыми производителями строительной химии,  мы предлагаем исключительно высококачественную продукцию, отвечающую всем нормам и стандартам качества ISO.</p>
          <h4 className='mt-10'>Целью компании является качественная и эффективная дистрибьюторская деятельность. Мы стремимся завоевать и удержать позицию лидирующей компании по реализации строительной химии, стремимся стать надежным партнером для клиентов и потребителей продукции и услуг компании.</h4>
        </div>
      </div>
      <div className="flex">
        <div className={styles.box}>
          <h1 className={styles.box__number}>01</h1>
          <h4>Квалифицированные специалисты</h4>
        </div> 
        <div className={styles.box}>
          <h1 className={styles.box__number}>02</h1>
          <h4>Оригинальная продукция</h4>
        </div> 
        <div className={styles.box}>
          <h1 className={styles.box__number}>03</h1>
          <h4>Гарантия качества</h4>
        </div>
      </div>
    </section>
  )
}