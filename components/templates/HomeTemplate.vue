<template>
  <div>
    <div class="grid-home">
      <h1>SISTEMA DE CONTROLE DE CÓPIAS</h1>
    </div>

    <div class="gridImg">
      <div>
        <img id="logo" src="@/assets/img/Copiadora.jpg" alt="Copiadora" />
      </div>
      <div class="gridTexto">
        <p class="texto">
          Este aplicativo foi desenvolvido para fins de estudo, tendo como
          finalidade desenvolver o conhecimento adquirido na área de sistema.
        </p>
        <p class="texto">
          As escolas particulares, em sua maioria, não têm total controle dos
          materiais impressos por seus setores. Este sistema vem para ajudar no
          controle desses materiais impressos pelo setor responsável pela
          impressão.
        </p>
      </div>
    </div>

    <div class="gridCorpo" style="grid-row: 2">
      <div class="texto">
        <p>
          Ao solicitarmos a impressão de um material, devemos questionar a sua
          necessidade. O consumo de papel em copiadoras é uma questão importante
          a considerar, uma vez que seu uso excessivo pode ter um impacto
          significativo no meio ambiente. Existem várias formas de reduzir esse
          consumo. Uma opção é utilizar a impressão frente e verso, que pode
          reduzir pela metade o número de folhas utilizadas. Outra opção é
          utilizar o modo rascunho, que consome menos tinta e papel. Além disso,
          é possível optar pela impressão em PDF, evitando assim a impressão
          desnecessária de documentos. A digitalização de documentos também é
          uma forma de economizar papel. Ao digitalizá-los, podemos armazená-los
          eletronicamente e compartilhá-los sem a necessidade de imprimir cópias
          físicas. Isso não apenas economiza papel, mas também espaço de
          armazenamento.
        </p>
        <p>
          Em resumo, existem várias formas de reduzir o consumo de papel em
          copiadoras. Ao utilizar essas opções disponíveis e digitalizar
          documentos sempre que possível, contribuímos para a preservação do
          meio ambiente e reduzimos os custos associados ao uso excessivo de
          papel.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-home {
  display: grid;
  margin: 0 auto;
  align-content: center;
  justify-items: center;
  h1 {
    border-bottom: 3px solid #222;
  }
}
.gridImg {
  display: grid;
  grid-template-columns: auto 1fr;
  font-size: 25px;
  align-items: center;
}
.texto {
  padding: 15px;
  text-align: justify;
  // text-indent: 3em;
}
.gridTexto {
  padding: 15px;
}
.gridCorpo {
  font-size: 25px;
  padding: 15px;
  text-align: justify;
  text-indent: 3em;
}
.gridImg #logo {
  width: 120px;
  height: 120px;
}
</style>
