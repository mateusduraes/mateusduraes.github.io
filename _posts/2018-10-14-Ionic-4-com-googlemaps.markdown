---
  layout: post
  title: Utilizando Googlemaps com Ionic 4
  date: 2018-10-20 23:50:00
  description: Um simples tutorial sobre como utilizar os recursos do googlemaps com o Ionic 4.
  img: maps-ionic-4/maps.jpg
  tags: [ionic, googlemaps] 
---

Você tem dúvidas de como usar os recursos do Googlemaps em seu projeto Ionic? Então vamos lá!

### Iniciando o projeto Ionic

Abre o seu terminal e vamos iniciar o projeto Ionic e subir o servidor de desenvolvimento.

```bash
  $ ionic start ionic-4-googlemaps --type=angular  
```

Pode selecionar a opção **blank** como layout padrão, e vamos para os próximos comandos.

```bash
  $ cd ionic-4-googlemaps
  $ ionic serve
```

### Adicionando o import da biblioteca JavaScript do googlemaps

No arquivo **index.html** basta adicionar o seguinte script

```html
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY"></script>
```

Para adquirir a sua chave de api basta acessar o [console do google](https://console.cloud.google.com/?hl=pt-br).

### Mão na massa

Vamos acessar o arquivo **home.page.html** e definir a estrutura inicial da seguinte forma.

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>
      Ionic 4 googlemaps
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  
</ion-content>
```


Então, vamos adicionar uma **div** que será o container do nosso mapa.

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>
      Ionic 4 googlemaps
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div #map class="map"></div>
</ion-content>
```

Algumas estilizações serão necessárias, então no arquivo **home.page.scss**, vamos adicionar algumas regras para que esse mapa ocupe toda a tela do dispositivo, no caso deste exemplo, todo o **ion-content**.


```scss
.map {
  height: 100%;
  width: 100%;
}
```

Perfeito, mas isso não é suficiente para que tenhamos o mapa inicializado.

Vamos instalar a biblioteca de tipos do **Googlemaps** que nos permitirá utilizá-lo junto com typescript, dando uma facilidade imensa na hora de chamar os métodos e tipar nossas variáveis.

```bash
  $ npm install --save-dev @types/googlemaps 
```

Agora em nossa classe **home.page.ts** vamos adicionar algumas propriedades. Perceba que neste ponto, já utilizamos os recursos do pacote **@types/googlemaps**
```typescript
  @ViewChild('map') mapRef: ElementRef;
  private map: google.maps.Map;
  private mapOptions: google.maps.MapOptions;
```

* A primeira variável, o **mapRef**, é um viewChild que nos permitirá ter acesso diretamente ao elemento HTML nativo que será o container do nosso mapa.
* A segunda variável, o **map** guardará de fato a instância do nosso mapa que será criado com a biblioteca do googlemaps.
* A terceira, a **mapOptions** é também uma variável da classe, onde guardaremos as opções de inicialização do nosso mapa.

Vamos então no arquivo **home.page.ts** criar a função que irá inicilizar o mapa.

```typescript
private initMap(): void {    
  const latLng: google.maps.LatLng = new google.maps.LatLng(-19.919157, -43.938547);
  this.mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    gestureHandling: 'cooperative'
  };
  this.map = new google.maps.Map(this.mapRef.nativeElement, this.mapOptions);

  new google.maps.Marker({
    position: new google.maps.LatLng(-19.919157, -43.938547),
    map: this.map,
  });

};
```

Feito isso, basta adicionar a chamada deste método no nosso hook **ngOnInit**

```typescript
ngOnInit() {
  this.initMap();
}
```

Pronto! Isso será suficiente para ter o resultado abaixo.
<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/maps-ionic-4/maps-result.png" alt="Google Maps Ionic 4 Resultado">
</p>


Este foi um tutorial bem rápido e a ideia não foi explicar a API do **Googlemaps** e sim mostrar quais são os passos para que você tenha essa estrutura funcionando em seu projeto Ionic 4.

Para entender mais da API do **Googlemaps** você pode acessar diretamente a [documentação do Google](https://developers.google.com/maps/documentation/javascript/tutorial?hl=pt-br), e, é claro que, todos esses métodos estarão disponíveis para serem utilizados na estrutura que instalamos no projeto.

Se você ficou com alguma dúvida sinta-se à vontade para perguntar, de qualquer forma o código deste exemplo está no meu [github](https://github.com/mateusduraes/ionic-4-googlemaps).

Obrigado e até a próxima! :+1:
