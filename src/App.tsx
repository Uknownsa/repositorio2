import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import toast from "react-hot-toast";
import pipi from "./assets/WhatsApp Image 2024-08-17 at 19.54.32.jpeg";
import boy from "./assets/clip-excited-person-gif-10.gif";

function App() {
  type Cat = { id: number; label: string }; // Define the correct type

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [isThirdDialogOpen, setIsThirdDialogOpen] = useState(false);
  const [isFourthDialogOpen, setIsFourthDialogOpen] = useState(false);
  const [isFivethDialogOpen, setIsFivethDialogOpen] = useState(false);
  const [isSixthDialogOpen, setIsSixthDialogOpen] = useState(false);

  const [isNome, setIsNome] = useState<string | null>(null);

  const [selectedCatName, setSelectedCatName] = useState<Cat | null>(null);
  const [selectedCat2Name, setSelectedCat2Name] = useState<Cat | null>(null);

  const handleClick = () => {
    setIsDialogOpen(false);
    setIsSecondDialogOpen(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(selectedCatName);
    if (selectedCatName && selectedCatName.id == 1) {
      setIsSecondDialogOpen(false);
      setIsThirdDialogOpen(true);
    } else {
      toast.error("Errou");
    }
  };
  const handleSubmit2 = (e: any) => {
    e.preventDefault();
    console.log(selectedCat2Name);
    if (selectedCat2Name && selectedCat2Name.id == 4) {
      toast.success("bingo!");
      setIsThirdDialogOpen(false);
      setIsFourthDialogOpen(true);
    } else {
      toast.error("Errou");
    }
  };
  const handleSubmit3 = (e: any) => {
    e.preventDefault();
    if (isNome == "Yasmin") {
      toast.success("convencida");
      setIsFourthDialogOpen(false);

      setIsFivethDialogOpen(true);
    } else {
      toast.error("errou");
    }
  };

  const [buttonPosition, setButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const handleNoClick = () => {
    // Generate random coordinates within the bounds of the dialog content
    const randomTop = Math.random() * 80 + "%"; // Between 0% and 80%
    const randomLeft = Math.random() * 80 + "%"; // Between 0% and 80%

    // Update button position
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <>
      <h1>Olá Yasmin bem-vinda!</h1>
      <p>Clique no botão para continuar!</p>
      <Button
        onClick={() => setIsDialogOpen(true)}
        sx={{ backgroundColor: "green ", color: "white" }}
      >
        Oi eu sou o botão
      </Button>
      <Dialog
        maxWidth="sm"
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      >
        <DialogContent>Você está pronta para um rápido quiz?</DialogContent>
        <DialogActions>
          <Button
            onClick={() => toast.error("Para de ser chata Yasmin")}
            sx={{ backgroundColor: "green ", color: "white" }}
          >
            Não, eu sou chata bruno
          </Button>
          <Button
            onClick={() => handleClick()}
            sx={{ backgroundColor: "green ", color: "white" }}
          >
            Sim, estou bruno
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isSecondDialogOpen} maxWidth="md">
        <DialogTitle>Pergunta 1</DialogTitle>
        <DialogContent>
          <p>Como é o nome da minha gata?</p>
          <br />
          <form onSubmit={handleSubmit}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { id: 1, label: "Angelina" },
                { id: 2, label: "Angeline" },
                { id: 3, label: "Ange" },
                { id: 4, label: "Aline" },
                { id: 5, label: "Robson" },
              ]}
              sx={{ width: 300, height: 200 }}
              onChange={(_, newValue) => setSelectedCatName(newValue)}
              renderInput={(params) => <TextField {...params} label="Gato" />}
            />
            <DialogActions>
              <Button
                type="submit"
                sx={{ backgroundColor: "green ", color: "white" }}
              >
                Confirmar resposta
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={isThirdDialogOpen} maxWidth="md">
        <DialogTitle>Pergunta 2</DialogTitle>
        <DialogContent>
          <p>Como é o nome desse gato?</p>
          <br />
          <form onSubmit={handleSubmit2}>
            <img
              style={{
                marginLeft: 80,
              }}
              src={pipi}
              alt="pipi"
              height={200}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { id: 1, label: "Penélope" },
                { id: 2, label: "Popo" },
                { id: 3, label: "Pípi" },
                { id: 4, label: "Pipi" },
                { id: 5, label: "Pitribi" },
              ]}
              sx={{ width: 300, height: 200 }}
              onChange={(_, newValue) => setSelectedCat2Name(newValue)}
              renderInput={(params) => <TextField {...params} label="Gato" />}
            />
            <DialogActions>
              <Button
                type="submit"
                sx={{ backgroundColor: "green ", color: "white" }}
              >
                Confirmar resposta
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={isFourthDialogOpen} maxWidth="md">
        <DialogTitle>Pergunta 3</DialogTitle>
        <DialogContent>
          <p>Digite o nome de uma mulher bonita</p>
          <br />
          <p>Digite:</p>
          <br />

          <form onSubmit={handleSubmit3}>
            <TextField
              label="Nome"
              value={isNome}
              onChange={(e) => {
                setIsNome(e.target.value);
              }}
            />
            <DialogActions>
              <Button
                type="submit"
                sx={{ backgroundColor: "green ", color: "white" }}
              >
                Confirmar resposta
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={isFivethDialogOpen} maxWidth="md">
        <DialogTitle>Parabéns!!</DialogTitle>
        <DialogContent>
          <p>Você completou o quiz!</p>
          <br />
          <p>Pergunta Final</p>
          <br />
          <p>Topa sair sexta?</p>

          <DialogActions>
            <Button
              type="button"
              onClick={handleNoClick}
              sx={{
                backgroundColor: "red",
                color: "white",
                position: "absolute",
                ...buttonPosition,
                transform: "translate(-50%, -50%)",
              }}
            >
              Não
            </Button>
            <Button
              type="submit"
              onClick={() => {
                setIsFivethDialogOpen(false);
                setIsSixthDialogOpen(true);
              }}
              sx={{ backgroundColor: "green ", color: "white" }}
            >
              Sim
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Dialog open={isSixthDialogOpen}>
        <DialogTitle>Fechou! Te vejo lá gatinha!!!</DialogTitle>
        <DialogContent>
          <img
            style={{
              marginLeft: 20,
            }}
            src={boy}
            alt="happy"
            height={200}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
