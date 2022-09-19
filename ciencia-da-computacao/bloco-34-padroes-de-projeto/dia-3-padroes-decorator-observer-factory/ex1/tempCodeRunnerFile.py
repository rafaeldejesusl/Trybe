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