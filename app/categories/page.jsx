import Card from "../../components/Card";
import data from "../../data.json";

const Categories = () => {
  return (
    <div className="w-full relative gap-6 justify-center items-center flex flex-row flex-wrap !h-fit py-10">
      {data.categories.map((category) => {
        return (
          <Card
            key={category.id}
            title={category.title}
            image={`${category.image}`}
            link={"/categories/" + category.id}
          />
        );
      })}
    </div>
  );
};

export default Categories;
