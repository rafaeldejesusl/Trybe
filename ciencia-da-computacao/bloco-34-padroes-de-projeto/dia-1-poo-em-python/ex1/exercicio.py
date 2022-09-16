from abc import ABC, abstractmethod
from collections import Counter
from math import pi


class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligada(self):
        return self.__ligada

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, new_canal):
        if 1 <= self.__canal <= 99:
            self.__canal = new_canal
        else:
            raise ValueError()

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


class Estatistica:
    @classmethod
    def media(cls, list):
        result = sum(list) / len(list)
        return result

    @classmethod
    def mediana(cls, list):
        list.sort()
        index = len(list) // 2
        if len(list) % 2 == 0:
            result = (list[index - 1] + list[index]) / 2
        else:
            result = list[index]
        return result

    @classmethod
    def moda(cls, list):
        result, _ = Counter(list).most_common()[0]
        return result


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimetro(self):
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * self.base + 2 * self.altura


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return pi * self.raio * self.raio

    def perimetro(self):
        return 2 * pi * self.raio
