import Form  from "@/entities/Form/ui/Form";
import './Quiestions.scss';

export default function Questions() {
  return (
    <section className="container">
      <div className="flex quest mt-[30px] mb-[30px] pt-20 pb-20 pl-20 pr-[102px] rounded-[15px]">
        <div className="quest__left">
          <h2 className="mb-4">Остались вопросы?</h2>
          <h4>Заполните данные, и наши 
            менеджера скоро свяжутся с вами
          </h4>
        </div>
        <div className="quest__right">
          <Form />
          <h4>Нажимая на кнопку “Отправить”, вы даете согласие на обработку персональных данных</h4>
        </div>
      </div>
    </section>
  )
}