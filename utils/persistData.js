import Lockr from "lockr";

function loadState() {
  return {
    playlist: {
      files: Lockr.get("files"),
      volume: Lockr.get("volume"),
    },
  };
}

function saveState(state) {
  Lockr.set("files", state.playlist.files);
  Lockr.set("volume", state.playlist.volume);
}

export { loadState, saveState };
