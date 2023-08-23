import { useForm } from "react-hook-form";
import { Container } from "./FilterTable.styles";
import { useLocalStore } from "../../store/local";
import IconHourImage from "../../assets/icon-hour.png";

export function FilterTable() {
  const { register, handleSubmit } = useForm();
  const updateHour = useLocalStore((state) => state.updateHour);
  const localLenght = useLocalStore((state) => state.localLenght);

  const onSubmitButton = (data: any) => {
    updateHour(data.hour);
  };
 
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitButton)} className="form">
        <div className="table-header">
          <img className="IconImage" src={IconHourImage} height="30px" alt="" />
          <span>Horário</span>
        </div>

        <div className="content">
          <span className="Content-title">Qual periodo quer treinar?</span>

          <div className="item-table">
            <div className="input">
              <input {...register("hour")} type="radio" value="06h" />
              <label>Manhã</label>
            </div>
            <span>06:00 ás 12:00</span>
          </div>

          <div className="item-table">
            <div className="input">
              <input {...register("hour")} type="radio" value="12h" />
              <label>Tarde</label>
            </div>
            <span>12:01 ás 18:00</span>
          </div>

          <div className="item-table">
            <div className="input">
              <input {...register("hour")} type="radio" value="17h" />
              <label>Noite</label>
            </div>
            <span>18:01 ás 23:00</span>
          </div>
        </div>

        <div className="more-infos">
          <div className="checkbox">
            <input type="checkbox" />
            <label>Exibir unidades fechadas</label>
          </div>
          <span>Resultados encontrados: {localLenght.length}</span>
        </div>

        <div className="buttons">
          <button className="find-button">ENCONTRAR UNIDADE</button>
          <button className="clean-button">LIMPAR</button>
        </div>
      </form>
    </Container>
  );
}
