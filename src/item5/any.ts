const item5 = () => {
  interface ComponentProps {
    onSelectItem: (item: number) => void;
  }

  function render(props: ComponentProps) {
    props.onSelectItem(1);
  }
  let selectedId: number = 0;

  function handleSelectItem(item: any) {
    // 타입체커를 통과해도 런타임에서 에러가 발생
    selectedId = item.id;
  }

  render({ onSelectItem: handleSelectItem });
};
