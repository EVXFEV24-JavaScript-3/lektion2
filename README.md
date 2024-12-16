---
author: Lektion 2
date: MMMM dd, YYYY
paging: "%d / %d"
---

# Teams lektion 2

Hej och välkommen!

## Agenda

1. Frågor
2. Redovisningar
3. En titt på uppgifterna
4. Genomgång av övningar (1-8)
5. Genomgång av input, output, events och lifecycles
6. Övning med handledning

---

# Fråga

Jag lyckas inte få Angular att fungera, när jag skapar ett helt nytt projekt så får jag inte med app.module filen. Får istället en app.config och en app.routes. Är det något jag missat som måste göras för att få in app module? Gissar på att det är därför det inte fungerar som det ska

# Svar

I den nya versionen av Angular verkar dem ha ändrat detta. Det går att köra ändå, utan app.module.

Alternativt kan man skapa projekt med: `ng new <app> --routing=false --standalone=false`
