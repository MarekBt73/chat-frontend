# Użyj oficjalnego obrazu Node.js jako obraz bazowy
FROM node:18

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj plik package.json oraz package-lock.json do katalogu roboczego
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj pozostałe pliki aplikacji do katalogu roboczego
COPY . .

# Zbuduj aplikację Remix.js
RUN npm run build

# Eksponuj port, na którym aplikacja będzie dostępna
EXPOSE 3000

# Definiuj polecenie uruchamiające aplikację
CMD ["npm", "start"]
