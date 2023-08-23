import { ListCard } from "../ListCard";
import { api } from "../../services/api";
import { Container } from "./List.styles";
import { useEffect, useState } from "react";
import { useLocalStore } from "../../store/local";

export const List = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [local, setLocal] = useState<any[]>([]);
  const hourTime = useLocalStore((state) => state.hour);
  const [localFiltered, setLocalFiltered] = useState<any[]>([]);
  const updateLenght = useLocalStore((state) => state.updateLenght);

  const getLocal = async () => {
    try {
      const response = await api.get("");
      const data = response.data.locations;

      data?.forEach((item: any) => {
        const hourArray: any[] = [];

        item?.schedules?.forEach((schedule: any) => {
          hourArray.push(schedule?.hour);
        });

        item.hour = hourArray;
      });

      data?.forEach((item: any) => {
        const daysArray: any[] = [];

        item?.schedules?.forEach((schedule: any) => {
          daysArray.push(schedule?.weekdays);
        });

        item.weekdays = daysArray;
      });
   

      return setLocal(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocal();
  }, [hourTime]);
 
  useEffect(() => {
    if (hourTime === "06h") {
      const filtered = local.filter(
        (data: any) =>
          data.hour.includes("05h às 22h") ||
          data.hour.includes("06h às 08h") ||
          data.hour.includes("06h às 09h") ||
          data.hour.includes("06h às 10h") ||
          data.hour.includes("06h às 12h") ||
          data.hour.includes("06h às 22h") ||
          data.hour.includes("06h às 23h") ||
          data.hour.includes("07h às 13h") ||
          data.hour.includes("08h às 12h") ||
          data.hour.includes("08h às 14h") ||
          data.hour.includes("08h às 16h") ||
          data.hour.includes("08h às 18h") ||
          data.hour.includes("09h às 14h") ||
          data.hour.includes("09h às 15h") ||
          data.hour.includes("09h às 17h") ||
          data.hour.includes("09h às 18h") ||
          data.hour.includes("10h às 16h") ||
          data.hour.includes("10h às 14h")
      );

      return setLocalFiltered(filtered);
    }
    if (hourTime === "12h") {
      const filtered = local.filter(
        (data: any) =>
          data.hour.includes("05h às 22h") ||
          data.hour.includes("06h às 22h") ||
          data.hour.includes("06h às 23h") ||
          data.hour.includes("08h às 14h") ||
          data.hour.includes("08h às 16h") ||
          data.hour.includes("08h às 18h") ||
          data.hour.includes("09h às 14h") ||
          data.hour.includes("09h às 15h") ||
          data.hour.includes("09h às 17h") ||
          data.hour.includes("09h às 18h") ||
          data.hour.includes("10h às 14h") ||
          data.hour.includes("10h às 16h") ||
          data.hour.includes("12h às 15h") ||
          data.hour.includes("12h às 18h") ||
          data.hour.includes("12h às 19h") ||
          data.hour.includes("12h às 20h") ||
          data.hour.includes("12h às 22h") ||
          data.hour.includes("13h às 17h") ||
          data.hour.includes("13h às 18h") ||
          data.hour.includes("13h às 21h") ||
          data.hour.includes("14h às 20h") ||
          data.hour.includes("15h às 21h") ||
          data.hour.includes("16h às 21h") ||
          data.hour.includes("16h às 00h") ||
          data.hour.includes("17h às 20h") ||
          data.hour.includes("17h às 21h")
      );

      

      return setLocalFiltered(filtered);
    }
    if (hourTime === "17h") {
      const filtered = local.filter(
        (data: any) =>
          data.hour.includes("05h às 22h") ||
          data.hour.includes("06h às 22h") ||
          data.hour.includes("06h às 23h") ||
          data.hour.includes("12h às 19h") ||
          data.hour.includes("12h às 20h") ||
          data.hour.includes("12h às 22h") ||
          data.hour.includes("13h às 21h") ||
          data.hour.includes("14h às 20h") ||
          data.hour.includes("15h às 21h") ||
          data.hour.includes("16h às 21h") ||
          data.hour.includes("16h às 00h") ||
          data.hour.includes("17h às 21h")
      );

      console.log(filtered);

      return setLocalFiltered(filtered);
    }
  }, [local, hourTime]);

  updateLenght(localFiltered);

  return (
    <Container>
      {localFiltered?.map((local, key) => (
        <ListCard
          key={key}
          opened={local?.opened}
          title={local?.title}
          adress={local?.content}
          mask={local?.mask}
          towel={local?.towel}
          fountain={local?.fountain}
          locker={local?.locker_room}
          schedules={local?.schedules}
        />
      ))}
    </Container>
  );
};
