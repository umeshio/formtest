# フォーム送信 e2eテスト

## Cypress概要 & 参考
Cypress[https://www.cypress.io/]
Cypressでフォーム送信テスト[https://qiita.com/iwata-goq/items/de379c67a5ff03c097e5]
保守性の高い書き方[https://future-architect.github.io/articles/20210428c/]

## 使い方

1. 'npm run cy:open' でCypressのテスト画面が起動
2. テスト画面でe2eテストを選択し、テストしたいブラウザを選択
3. ローカルのcypress > e2e フォルダ内のtest.cy.jsを、プロジェクトに合わせて編集 or 追加
4. テスト画面でテストしたいjsを選びテストする

## テストコードの書き方
概要&参考サイトを参照。 

## tips
- 入力ステップをコメントアウトしてバリデーションが効いているかテストできる
- supportディレクトリにjsを追加してオリジナルのコマンド登録できる[https://future-architect.github.io/articles/20210428c/]
