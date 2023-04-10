import { useEffect, useState } from "react";
import { getItem } from "../../../services/SearchService";
import { useParams } from "react-router-dom";
import { IItemResult } from "../../../types";
import { Loading } from "../../../common/Loading";
import {
  ItemHolder,
  ItemInfoHolder,
  SingleItemWrapper,
} from "../styles/ItemsStyles";

export const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState<IItemResult>({
    name: "",
    id: 0,
    status: "",
    image: "",
    url: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getItem(Number(id))
      .then((res: IItemResult) => {
        setItem(res);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [id]);

  if (loading) return <Loading />;

  return (
    <SingleItemWrapper>
      <ItemHolder>
        <img src={item.image} alt="character" />
        <ItemInfoHolder>
          <p>
            Name:<span>{item.name}</span>
          </p>
          <p>
            Status:<span>{item.status}</span>
          </p>
        </ItemInfoHolder>
      </ItemHolder>
    </SingleItemWrapper>
  );
};
