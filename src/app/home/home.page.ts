import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = "0";
  primeiro_elemento: string = "";
  segundo_elemento: string = "";
  operador_selecionado: boolean = false;
  operando: string = "";

  constructor() {}

  digito(valor: string) {
    if (this.operador_selecionado === false) {
      if (this.resultado === "0" || this.resultado === "-0") {
        this.resultado = valor;
      } else {
        this.resultado += valor;
      }
    } else {
      this.segundo_elemento = this.segundo_elemento + valor;
      this.resultado = this.resultado + valor;
    }
  }

  operador(operador_calculadora: string) {
    if (!this.operador_selecionado) {
      this.primeiro_elemento = this.resultado;
      this.resultado += operador_calculadora;
      this.operador_selecionado = true;
      this.operando = operador_calculadora;
    } else {
      console.log("Um operador já foi selecionado");
    }
  }

  calcular() {
    if (this.operando && this.segundo_elemento !== "") {
      const primeiro = parseFloat(this.primeiro_elemento);
      const segundo = parseFloat(this.segundo_elemento);

      switch (this.operando) {
        case "+":
          this.resultado = (primeiro + segundo).toString();
          break;
        case "-":
          this.resultado = (primeiro - segundo).toString();
          break;
        case "*":
          this.resultado = (primeiro * segundo).toString();
          break;
        case "/":
          if (segundo !== 0) {
            this.resultado = (primeiro / segundo).toString();
          } else {
            this.resultado = "Erro";
          }
          break;

          case "^":
  this.resultado = Math.pow(primeiro, segundo).toString();
  break;
case "√":
  this.resultado = Math.sqrt(segundo).toString();
  break;


      }
      this.operador_selecionado = false;
      this.primeiro_elemento = this.resultado;
      this.segundo_elemento = "";
      this.operando = "";
    }
  }

  redefinir() {
    this.resultado = "0";
    this.primeiro_elemento = "";
    this.segundo_elemento = "";
    this.operando = "";
    this.operador_selecionado = false;
  }
}
