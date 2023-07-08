const pitch = 1;
const rate = 0.9;

async function populateVoiceList(synth) {
  try {
    const voices = await synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase();
      const bname = b.name.toUpperCase();
      if (aname < bname) return -1;
      else if (aname === bname) return 0;
      else return +1;
    });

    return voices;
  } catch (error) {
    throw new Error("Failure retrieving voices");
  }
}

const speak = async(textToRead) => {
  const windowSpeech = window.speechSynthesis;
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => populateVoiceList
  }

  if (windowSpeech.speaking) {
    console.error("speechSynthesis.speaking")
    return
  }
  if (textToRead !== "") {
    const utterThis = new SpeechSynthesisUtterance(textToRead)
    utterThis.onend = function (event) {
    }
    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror")
    }
    utterThis.pitch = pitch
    utterThis.rate = rate
    windowSpeech.speak(utterThis)
  }
}

export default speak;