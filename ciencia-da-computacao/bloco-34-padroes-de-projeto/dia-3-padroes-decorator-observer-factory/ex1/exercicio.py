from abc import ABC, abstractmethod


# Exercicio 1
ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message


class LogError:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"


class LogWarning:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA}{self.log.dispara_log(message)}{RESET}"


class LogSuccess:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"


# logger = Log()
# print(LogSuccess(logger).dispara_log("O sistema esta funcionando"))
# print(LogWarning(logger).dispara_log("O sistema esta lento"))
# print(LogError(logger).dispara_log("O sistema esta com erros"))


# Exercicio 2
class Alarme:
    def __init__(self):
        self.rotinas = []

    def adicionar(self, rotina):
        self.rotinas.append(rotina)

    def acionar_rotinas(self):
        for rotina in self.rotinas:
            rotina.acionar()

    def despertar(self):
        print("TRIIIIIIIM, TRIIIIIIIM")
        self.acionar_rotinas()


class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        pass


class AcionadorLuz(Acionador):
    def __init__(self, alarme: Alarme):
        self.alarme = alarme
        self.alarme.adicionar(self)

    def acionar(self):
        print("Acendendo Luz")


class AcionadorCafeteira(Acionador):
    def __init__(self, alarme: Alarme):
        self.alarme = alarme
        self.alarme.adicionar(self)

    def acionar(self):
        print("Preparando o café")


class AcionadorComputador(Acionador):
    def __init__(self, alarme: Alarme):
        self.alarme = alarme
        self.alarme.adicionar(self)

    def acionar(self):
        print("Iniciando o computador")


# alarme_manha = Alarme()
# AcionadorLuz(alarme_manha)
# AcionadorCafeteira(alarme_manha)
# AcionadorComputador(alarme_manha)

# alarme_manha.despertar()

# alarme_tarde = Alarme()
# AcionadorCafeteira(alarme_tarde)

# alarme_tarde.despertar()

# Exercicio 3
class SystemAccess(ABC):
    @abstractmethod
    def __init__(self, access=False):
        pass

    def set_permission(self, access):
        pass


class SupportSystemAccess(SystemAccess):
    def __init__(self, access=False):
        self.name = "Support"
        self.set_permission(access)

    def set_permission(self, access):
        self.access = access


class SalesSystemAccess(SystemAccess):
    def __init__(self, access=False):
        self.name = "Sales"
        self.set_permission(access)

    def set_permission(self, access):
        self.access = access


class FinanceSystemAccess(SystemAccess):
    def __init__(self, access=False):
        self.name = "Finance"
        self.set_permission(access)

    def set_permission(self, access):
        self.access = access


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account():
        pass

    def show_permissions(self):
        permissions_name = [
          permission.name for permission in self.permissions
        ]
        return permissions_name

    def add_permissions(self, permission):
        self.permissions.append(permission)


class SupportAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))


class SupportSalerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))
        self.add_permissions(SalesSystemAccess(True))


class ManagerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))
        self.add_permissions(SalesSystemAccess(True))
        self.add_permissions(FinanceSystemAccess(True))


print("Qual o nome da pessoa que deseja criar?")
name = input()
print("Escolha qual código do perfil que deseja criar:")
account_type = input(
    "\n1 - Suporte\n2 - Gerente\n3 - Vedendas & Suporte\n"
)
if account_type == "1":
    account = SupportAccount(name)
elif account_type == "2":
    account = ManagerAccount(name)
elif account_type == "3":
    account = SupportSalerAccount(name)

print(f"\nCriando a conta para {account.username}.")
print(f"Acesso liberado para os sistemas: {account.show_permissions()}")
