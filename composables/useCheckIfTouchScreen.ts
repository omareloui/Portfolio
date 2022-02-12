export const useCheckIfTouchScreen = () =>
  function checkIfTouchScreen() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };
