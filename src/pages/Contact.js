import { useLocation } from "react-router-dom";


export default function Contact() {
  const queryString = useLocation().search

const queryParams = new URLSearchParams(queryString)
const name = queryParams.get("name")

  return (
    <div>
      <h2> Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat
        porro distinctio nihil nam perspiciatis error hic veniam quam cupiditate
        possimus iste maiores ipsam similique, molestiae unde iusto laudantium
        ex.
      </p>
    </div>
  );
}
