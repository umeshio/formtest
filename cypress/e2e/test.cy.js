describe('フォーム送信テスト', () => {
	it ('送信しました', () => {
		const first_name = '山田'
		const last_name = '太郎'
		const first_name_kana = 'ヤマダ'
		const last_name_kana = 'タロウ'
		const tell = '090-1234-5678'
		const mail = 'dumy@mail.com'
		const mail_2 = 'dumy@mail.com'
		const message = 'テスト送信です'

		const company = 'ABC株式会社'

			// 適宜変更して下さい
			cy.visit('http://localhost:8080/contact/')
			cy.get('input[name=company]').type(company)
			cy.get('input[name=last_name]').type(last_name)
			cy.get('input[name=first_name]').type(first_name)
			cy.get('input[name=last_name_kana]').type(last_name_kana)
			cy.get('input[name=first_name_kana]').type(first_name_kana)
			cy.get('input[name=tel]').type(tell)
			cy.get('textarea[name=message]').type(message)

			cy.get('#confirmBtn').click()
	})
})