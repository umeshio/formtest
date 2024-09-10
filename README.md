# Cypress フォーム送信テスト

[Cypress](https://www.cypress.io/)を使用したフォーム送信のe2eテスト雛形

## 参考サイト
Cypres：<https://www.cypress.io/>  
フォーム送信テスト【Qiita】：<https://qiita.com/iwata-goq/items/de379c67a5ff03c097e5>  
基礎構文【Qiita】：<https://qiita.com/n_takechi/items/7fb80a353505065502ef>  
独自スクリプトとカプセル化：<https://future-architect.github.io/articles/20210428c/>  

## 使い方

1. 'npm run cy:open' でCypressのテスト画面が起動
2. テスト画面でe2eテストを選択し、テストしたいブラウザを選択
3. ローカルのcypress > e2e フォルダ内のtest.cy.jsを、プロジェクトに合わせて編集 or 追加
4. テスト画面でテストしたいjsを選びテストする

## テストコードの書き方
参考サイトを参照。 

## Tips
- 入力ステップをコメントアウトしてバリデーションが効いているかテストできる
- supportディレクトリにjsを追加してオリジナルのコマンド登録できる  
https://future-architect.github.io/articles/20210428c/
- 条件分岐や、直前のテストの実行結果によるフローの取捨選択ができる
