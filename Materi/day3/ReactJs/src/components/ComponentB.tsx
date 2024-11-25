interface ComponentBProps {
  orang: string;
}

const ComponentB = ({ orang }: ComponentBProps) => {
  return <div className="warna">Welcome,{orang}</div>;
};

export default ComponentB;
